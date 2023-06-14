const Quote = require('../models/quoteModel')

const addQuote = async (req, res) => {
    const {userId, author, body} = req.body
    if (!userId || !author || !body){
        res.status(400).json({error: "All fields must be filled"})
    }
    const quote = await Quote.create({userId, author, body})
    return res.status(200).json({quote})
}

module.exports = {addQuote}