const express = require('express')
const {addQuote, fetchQuotes, addLike, removeLike, aU} = require('../controllers/quoteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post('/add', addQuote)

router.post('/fetchAll', fetchQuotes)

router.post('/addLike', addLike)

router.post('/removeLike', removeLike)

// router.get('/aU', aU)

module.exports = router