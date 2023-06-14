const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Quote', quoteSchema)