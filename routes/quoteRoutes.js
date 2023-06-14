const express = require('express')
const {addQuote} = require('../controllers/quoteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.post('/add', addQuote)

module.exports = router