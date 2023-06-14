const express = require('express')
const {addQuote, fetchQuotes} = require('../controllers/quoteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post('/add', addQuote)

router.get('/fetchAll', fetchQuotes)

module.exports = router