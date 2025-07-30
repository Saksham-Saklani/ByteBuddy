const {setUser, getUser } = require("../services/auth")

function checkAuthentication(req, res, next){

    const authCookie = req.cookie?.token
    req.user = null

    if(!authCookie) return next()

    const user = getUser(authCookie)
    if(!user) return next()

    req.user = user
    next()

}

module.exports = {
    checkAuthentication
}