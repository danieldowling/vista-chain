const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    //class to add a new block to the chain, takes in the last block and data
    addBlock(data) {
        const block = Block.mineBlock(this.chain[this.chain.length-1], data);
        this.chain.push(block);

        return block;
    }

    isValidChain(chain) {
        //checks incoming chain to validate it starts with the genesis block
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        //loop through all blocks in chain 
        for(let i=1; i<chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i-1];
        
            //check if the current blocks last hash is equal to the previous blocks hash
            //or if the hash of the current block does not equal the generated hash
            if(block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)) {
                return false;
            }
        }
        
        return true;
    }

    replaceChain(newChain) {
        //check length and validity of new chain
        //if longer and a valid chain, replace current chain with new chain
        if(newChain.length <= this.chain.length) {
            console.log('Recieved chain is not longer than current chain.');
            return;
        } else if (!this.isValidChain(newChain)) {
            console.log('The recieved chain is not valid.');
            return;
        }

        console.log('Replacing blockchain with the new chain');
        this.chain = newChain;
    }
}

module.exports = Blockchain;