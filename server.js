const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

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
