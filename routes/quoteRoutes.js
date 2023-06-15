const express = require('express')
const {addQuote, fetchQuotes, addLike, removeLike} = require('../controllers/quoteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post('/add', addQuote)

router.post('/fetchAll', fetchQuotes)

router.post('/addLike', addLike)

router.post('/removeLike', removeLike)

module.exports = router