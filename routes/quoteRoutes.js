const express = require('express')
const {addQuote} = require('../controllers/quoteController')

const router = express.Router()

router.post('/add', addQuote)

module.exports = router