const JWT = require('jsonwebtoken')


function setUser(user){
   const payload = {
        userId : user._id,
    }

    return JWT.sign(payload, process.env.JWT_secret, {expiresIn:"1d"})
}

function getUser(token){
    if(!token) return null

    try {
        return JWT.verify(token,secretKey)
    } catch (error) {
        return null
    }
}

module.exports = {
    setUser,
    getUser
}