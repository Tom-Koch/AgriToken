const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    farmerId: String,
    cropName: String,
    quantity: Number,
    tokenValue: Number,
    isSold: { type: Boolean, default: false }
});

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
