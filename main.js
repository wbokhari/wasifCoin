const Block = require('./block.js')
const Blockchain = require('./blockchain.js')


let wasifCoin = new Blockchain();
wasifCoin.addBlock(new Block(1, "04/07/2017", "{ amount: 4 }"));
wasifCoin.addBlock(new Block(2, "05/07/2017", "{ amount: 88 }"));

console.log(wasifCoin);

console.log('Blockchain valid? ' + wasifCoin.isChainValid());

console.log('Changing a block...');
wasifCoin.chain[1].data = "{ amount: 9 }";
//wasifCoin.chain[1].hash = wasifCoin.chain[1].calculateHash();
//console.log(wasifCoin);
console.log("Blockchain valid? " + wasifCoin.isChainValid());
