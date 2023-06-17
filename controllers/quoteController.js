const Quote = require('../models/quoteModel')
const User = require('../models/userModel')

const addQuote = async (req, res) => {
    const {author, quote} = req.body
    const userId = req.user._id
    console.log('userId', userId)
    if (!userId || !author || !quote){
        return res.status(400).json({error: "All fields must be filled"})
    }
    const user = User.find({userId})

    const createdQuote = await Quote.create({userId, username: user.username, full_name: user.full_name, author, body: quote})
    return res.status(200).json({quote: createdQuote})
}

// const aU = async (req, res) => {
//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     const quotes = await Quote.find({})
//     const users = await User.find({})
//     ;(await quotes).forEach((element, index)=>{
//         const rand = getRandomInt(0, users.length)
//         const randUser = users[rand]
//         element.username = randUser.username
//         element.full_name = randUser.full_name
//         element.save()
//     })
// }

const fetchQuotes = async (req, res) => {
    const {limit, skip} = req.body
    const quotes = await Quote.find({ }).skip(skip).limit(limit)
    return res.status(200).json({quotes})
}

const addLike = async (req, res) => {
    const {quoteId} = req.body
    const username = req.user.username
    const quote = await Quote.findOne({_id: quoteId})
    if (quote.likes.includes(username)){
        return res.status(400).json({error: "Username already liked the quote"})
    }
    quote.likes.push(username)
    quote.save()
    return res.status(200).json({quote})
}

const removeLike = async (req, res) => {
    const {quoteId} = req.body
    const username = req.user.username
    const quote = await Quote.findOne({_id: quoteId})
    if (!quote.likes.includes(username)){
        return res.status(400).json({error: "Username hasn't liked the quote"})
    }
    const index = quote.likes.indexOf(username)
    quote.likes.splice(index, 1)
    quote.save()
    return res.status(200).json({quote})
}

module.exports = {addQuote, fetchQuotes, addLike, removeLike}