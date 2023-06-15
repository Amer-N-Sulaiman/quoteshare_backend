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
    },
    likes: {
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model('Quote', quoteSchema)