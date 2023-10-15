const { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } = require('@solana/web3.js');

const solanaNetwork = 'https://api.mainnet-beta.solana.com'; // 
const connection = new Connection(solanaNetwork, 'confirmed');

// I will add functions related to Solana transactions, token management, and other Solana-specific features

module.exports = { connection };
