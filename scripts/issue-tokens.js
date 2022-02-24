const DecentralBank = artifacts.require('DecentralBank');
//const DecentralBank = require('DecentralBank');
//import DecentralBank from '../truffle_abis/DecentralBank.json'


module.exports = async function issueRewards(callback) {
    let decentralBank = await DecentralBank.deployed()
    await decentralBank.issueTokens()
    console.log('Tokens have been issued successfully!')
    callback()
}


/*
export default async function issueRewards(callback) { 
    let decentralBank = await DecentralBank.deployed()
    await decentralBank.issueTokens()
    console.log('Tokens have been issued successfully!')
    callback()
}
*/