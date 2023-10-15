const express = require('express');
const Crop = require('../models/Crop');
const router = express.Router();

// Sample route for adding a new crop tokenized future
router.post('/add', async (req, res) => {
    try {
        const newCrop = new Crop(req.body);
        await newCrop.save();
        res.status(201).send(newCrop);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Add other routes for listing, buying, updating crops, etc.

module.exports = router;
