const express = require('express')
const {addQuote, fetchQuotes, addLike} = require('../controllers/quoteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post('/add', addQuote)

router.get('/fetchAll', fetchQuotes)

router.post('/addLike', addLike)

module.exports = router