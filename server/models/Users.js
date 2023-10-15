const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Use encryption in real-world scenario
    walletAddress: String,
    tokenBalance: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
