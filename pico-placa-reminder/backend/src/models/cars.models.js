const mongoose = require('mongoose')
const { Schema } = mongoose

const CarsSchema = new Schema({
    brand: { type: String, required: [true, 'Brand required'] },
    color: { type: String, required: [true, 'Color required'] },
    license: { type: String, required: [true, 'License required'] },
    userName: String,
    date: { type: Date, default: Date.now }
})

//convert to model

module.exports = mongoose.model('cars', CarsSchema);