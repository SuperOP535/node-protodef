# ProtoDef-Lite
ProtoDef-Lite is mainly made for webpack, test have shown that at least 120 kB is saved.
This version includes no validation so you won't easily know what's the problem with your
protocol schema, I recommend you to use protodef in your server and protodef-lite in your client.

A node.js module to simplify defining, reading and writing binary blobs,
whether they be internet protocols or files.

## Installing

```
npm install superop535/protodef-lite
```


## Usage

See [example](example.js)

## Documentation

See the language independent [ProtoDef](https://github.com/ProtoDef-io/ProtoDef) specification.

* [api.md](doc/api.md) documents the exposed functions and classes
* [datatypes.md](doc/datatypes.md) documents the default datatypes provided by Protodef.
* [newDatatypes.md](doc/newDatatypes.md) explains how to create new datatypes for protodef
* [history.md](doc/history.md) is the releases history

## Projects Using ProtoDef

* [minecraft-protocol](https://github.com/PrismarineJS/node-minecraft-protocol) defines a protocol.json by minecraft version and use ProtoDef to serialize and parse packets
  * the protocol.json files are stored in [minecraft-data](https://github.com/PrismarineJS/minecraft-data/blob/master/data/pc/1.8/protocol.json)
  * and they can be visualized automatically in this [doc](http://prismarinejs.github.io/minecraft-data/?d=protocol)
* [prismarine-nbt](https://github.com/PrismarineJS/prismarine-nbt) defined a nbt.json to parse and serialize the NBT format
* [mineflayer](https://github.com/PrismarineJS/mineflayer/blob/master/lib/plugins/command_block.js) uses ProtoDef to parse plugin messages
* [minecraft-protocol-forge](https://github.com/PrismarineJS/node-minecraft-protocol-forge) parses and serialize forge plugin messages
* [node-raknet](https://github.com/mhsjlw/node-raknet) describe the raknet protocol in a protocol.json and uses ProtoDef to read it
* [minecraft-classic-protocol](https://github.com/mhsjlw/minecraft-classic-protocol) defines the classic minecraft protocol with ProtoDef
* [pocket-minecraft-protocol](https://github.com/mhsjlw/pocket-minecraft-protocol) defines the minecraft pocket edition protocol
 
