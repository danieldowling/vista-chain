const SHA256 = require('crypto-js/sha256');

//create a block
class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString() {
        return `Block - 
            Timestamp: ${this.timestamp}
            Last Hash: ${this.lastHash.substring(0, 10)}
            Hash     : ${this.hash.substring(0, 10)}
            Data     : ${this.data}`;
    }

    //creates genesis block
    static genesis() {
        return new this('Genesis time', '-----', 'f1r57-h45h', []); 
    }

    //allows you to mine a block
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }

    //uses SHA256 to create a unique hash
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data } = block;
        return Block.hash(timestamp, lastHash, data);
    }
}

module.exports = Block;