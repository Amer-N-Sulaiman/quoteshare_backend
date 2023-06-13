const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET)
    return token
}
const login = async (req, res)=>{
    const {username, password} = req.body
    try{
        const user = await User.login(username, password)
        console.log('d ', user._id)
        const token = generateToken(user._id)
        console.log('token', token)
        res.status(200).json({username, token})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const signup = async (req, res)=>{
    console.log('req', req.body)
    const {full_name, username, password} = req.body
    try {
        const user = await User.signup(full_name, username, password)
        const token = generateToken(user._id)
        return res.status(200).json({username, token})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {login, signup}