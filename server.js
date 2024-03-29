const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()
const cors = require('cors')
const quoteRoutes = require('./routes/quoteRoutes')
const app = express()


app.use(cors())


app.use(express.json())



// routes
app.use('/auth', userRoutes)
app.use('/quote', quoteRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        try{
            app.listen(process.env.PORT, ()=>{
                console.log('Connected to DB & Listening on port', process.env.PORT)
            })
        } catch(error) {
            console.log('there was an error', error.message)
        }
    })
