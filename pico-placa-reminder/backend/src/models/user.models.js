const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name required'] },
    password: { type: String, required: [true, 'Password required'] },
    date: { type: Date, default: Date.now }
})

//convert to model

module.exports = mongoose.model('users', UserSchema);