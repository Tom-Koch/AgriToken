const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Sample route for registering a user
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Add other routes for login, profile updates, etc.

module.exports = router;
