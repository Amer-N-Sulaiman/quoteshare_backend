const Quote = require('../models/quoteModel')

const addQuote = async (req, res) => {
    const {author, quote} = req.body
    const userId = req.user._id
    console.log('userId', userId)
    if (!userId || !author || !quote){
        return res.status(400).json({error: "All fields must be filled"})
    }
    const createdQuote = await Quote.create({userId, author, body: quote})
    return res.status(200).json({quote: createdQuote})
}

module.exports = {addQuote}