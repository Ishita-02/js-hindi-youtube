const {Web3} = require('web3')
const Count = require('./Count.json')

const web3 = new Web3('https://polygon-amoy.g.alchemy.com/v2/20gKKYO3bnUx5QPEpz80cOFLtmSTxO2L')
const address = '0x3330A50F44945FE63981dB19ca41782e64f23a58'
const privateKey = '0x2d3193ac4c94e9babbc4333f68aaf69cc41ff3fbbbd50e3a2d83409bbc1952b1'
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
console.log(account)
web3.eth.accounts.wallet.add(account);

const countContract = new web3.eth.Contract(Count.abi, address);

async function getCount() {
    // const count = await countContract.methods.getCount().call();
    // console.log('count is:', count);

    const gasEstimate = await countContract.methods.getCount().estimateGas({gas: 5000000});
    console.log('Estimated gas:', gasEstimate);

    const nonce = await web3.eth.getTransactionCount(account.address, "latest");
    console.log("nonce", nonce)

    const tx = {
        from: account.address,
        to: address,
        data: countContract.methods.getCount().encodeABI(),
        gas: 500000,
        nonce: nonce, 
        gasPrice: await web3.eth.getGasPrice()
    };

    console.log("tx", tx)

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    console.log(signedTx)
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(receipt)

    return receipt;
}

async function incrementCount() {
    const gasEstimate = await countContract.methods.increment().estimateGas({gas: 5000000});
    console.log('Estimated gas:', gasEstimate);

    const nonce = await web3.eth.getTransactionCount(account.address, "latest");
    console.log("nonce", nonce)

    const tx = {
        from: account.address,
        to: address,
        data: countContract.methods.increment().encodeABI(),
        gas: 500000,
        nonce: nonce, 
        gasPrice: await web3.eth.getGasPrice()
    };

    console.log("tx", tx)

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    console.log(signedTx)
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(receipt)

    return receipt;
}

// incrementCount().then(receipt => {
//     console.log("Increment executed successfully")
//     console.log('Transaction successful with receipt:', receipt);
// }).catch(error => {
//     console.error('Transaction failed:', error);
// });

getCount().then(receipt => {
    console.log("Get count executed successfully")
    console.log('Transaction successful with receipt:', receipt);
}).catch(error => {
    console.error('Transaction failed:', error);
});