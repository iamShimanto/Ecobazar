const express = require("express")
const { userSignUp } = require("../controller/authController")

const router = express.Router()

router.post("/signup", userSignUp)



module.exports = router