const login = (req, res)=>{
    res.json('login')
}

const signup = (req, res)=>{
    const {username, password} = req.body
}

module.exports = {login, signup}