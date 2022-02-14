const mongoose = require('mongoose')
const { Schema } = mongoose

const CarsSchema = new Schema({
    brand: String,
    color: String,
    license: String,
    userName: String,
    date: { type: Date, default: Date.now }
})

//convert to model

module.exports = mongoose.model('cars', CarsSchema);