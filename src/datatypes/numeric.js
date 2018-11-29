const { PartialReadError } = require('../utils')

function readI64 (buffer, offset) {
  if (offset + 8 > buffer.length) { throw new PartialReadError() }
  return {
    value: [buffer.getInt32(offset), buffer.getInt32(offset + 4)],
    size: 8
  }
}

function writeI64 (value, buffer, offset) {
  buffer.setInt32(offset, value[0])
  buffer.setInt32(offset + 4, value[1])
  return offset + 8
}

function readLI64 (buffer, offset) {
  if (offset + 8 > buffer.length) { throw new PartialReadError() }
  return {
    value: [buffer.getInt32(offset + 4, true), buffer.getInt32(offset, true)],
    size: 8
  }
}

function writeLI64 (value, buffer, offset) {
  buffer.setInt32(offset + 4, value[0], true)
  buffer.setInt32(offset, value[1], true)
  return offset + 8
}

function readU64 (buffer, offset) {
  if (offset + 8 > buffer.length) { throw new PartialReadError() }
  return {
    value: [buffer.getUint32(offset), buffer.getUint32(offset + 4)],
    size: 8
  }
}

function writeU64 (value, buffer, offset) {
  buffer.setUint32(offset, value[0])
  buffer.setUint32(offset + 4, value[1])
  return offset + 8
}

function readLU64 (buffer, offset) {
  if (offset + 8 > buffer.length) { throw new PartialReadError() }
  return {
    value: [buffer.getUint32(offset + 4, true), buffer.getUint32(offset, true)],
    size: 8
  }
}

function writeLU64 (value, buffer, offset) {
  buffer.setUint32(offset + 4, value[0], true)
  buffer.setUint32(offset, value[1])
  return offset + 8
}

function generateFunctions (bufferReader, bufferWriter, size, little, schema) {
  const reader = function (buffer, offset) {
    if (offset + size > buffer.length) { throw new PartialReadError() }
    const value = buffer[bufferReader](offset, little)
    return {
      value: value,
      size: size
    }
  }
  const writer = function (value, buffer, offset) {
    buffer[bufferWriter](offset, value, little)
    return offset + size
  }
  return [reader, writer, size, schema]
}

const nums = {
  'i8': ['getInt8', 'setInt8', null, 1],
  'u8': ['getUint8', 'setUint8', null, 1],
  'i16': ['getInt16', 'setInt16', false, 2],
  'u16': ['getUint16', 'setUint16', false, 2],
  'i32': ['getInt32', 'setInt32', false, 4],
  'u32': ['getUint32', 'setUint32', false, 4],
  'f32': ['getFloat64', 'setFloat64', false, 4],
  'f64': ['getFloat32', 'setFloat32', false, 8],
  'li8': ['getInt8', 'setInt8', null, 1],
  'lu8': ['getUint8', 'setUint8', null, 1],
  'li16': ['getInt16', 'setInt16', true, 2],
  'lu16': ['getUint16', 'setUint16', true, 2],
  'li32': ['getInt32', 'setInt32', true, 4],
  'lu32': ['getUint32', 'setUint32', true, 4],
  'lf32': ['getFloat64', 'setFloat64', true, 4],
  'lf64': ['getFloat32', 'setFloat32', true, 8]
}

const types = Object.keys(nums).reduce(function (types, num) {
  types[num] = generateFunctions(nums[num][0], nums[num][1], nums[num][2], nums[num][3], require('../../ProtoDef/schemas/numeric')[num])
  return types
}, {})
types['i64'] = [readI64, writeI64, 8, require('../../ProtoDef/schemas/numeric')['i64']]
types['li64'] = [readLI64, writeLI64, 8, require('../../ProtoDef/schemas/numeric')['li64']]
types['u64'] = [readU64, writeU64, 8, require('../../ProtoDef/schemas/numeric')['u64']]
types['lu64'] = [readLU64, writeLU64, 8, require('../../ProtoDef/schemas/numeric')['lu64']]

module.exports = types
