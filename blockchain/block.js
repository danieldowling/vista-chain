const ChainUtil = require('../chain-util');
const { DIFFICULTY, MINE_RATE } = require('../config');

//create a block
class Block {
    constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }

    toString() {
        return `Block - 
            Timestamp : ${this.timestamp}
            Last Hash : ${this.lastHash.substring(0, 10)}
            Hash      : ${this.hash.substring(0, 10)}
            Nonce     : ${this.nonce}
            Difficulty: ${this.difficulty}
            Data      : ${this.data}`;
    }

    //creates genesis block
    static genesis() {
        return new this('Genesis time', '-----', 'f1r57-h45h', [], 0, DIFFICULTY); 
    }

    //allows you to mine a block
    //do while loop ensures a hash will eventually be created that meets the nonce difficulty
    static mineBlock(lastBlock, data) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;
        
        do {
            nonce++
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

    //uses SHA256 to create a unique hash
    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return ChainUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;
        return Block.hash(timestamp, lastHash, data, nonce, difficulty);
    }

    //function to dynamically update the level of difficulty for mining blocks
    //based on last blocks timestamp and current blocks timestamp
    static adjustDifficulty(lastBlock, currentTime) {
        let { difficulty } = lastBlock;
        difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1;
        return difficulty;
    }
}

module.exports = Block;