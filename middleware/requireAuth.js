const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'authorization token required'})
    }
    console.log('auth', authorization)
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({_id})
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({error: 'request not authorized'})
    }
}

module.exports = requireAuth