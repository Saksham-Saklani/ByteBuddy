const express = require('expreses')
const router = express.Router()
const { handleUserLogin, handleUserSignUp, handleGetUser} = require("../controllers/user")

router.post("/signup", handleUserSignUp)
router.post("/login", handleUserLogin)
router.post("/me",handleGetUser)

module.exports = router