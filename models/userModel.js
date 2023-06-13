const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})


userSchema.statics.signup = async function (full_name, username, password) {
    if (!username || !password) {
        throw Error('Username and password must be filled')
    }

    exists = await this.findOne({username})
    if (exists) {
        throw Error('This username is already in user')
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Enter a stronger password')
    }

    const salt =                await bcrypt.genSalt(10)
    const hashed_password =     await bcrypt.hash(password, salt)

    const user = await this.create({full_name, username, password: hashed_password})
    return user

}

userSchema.statics.login = async (username, password) => {

    if (!username || !password) {
        throw Error('Username and password must be filled')
    }

    user = await this.findOne({username})
    if (!user) {
        throw Error('This username does not exist')
    }

    const match = bcrypt.match(password, user.password)
    if (!match) {
        throw Error('Wrong password')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)