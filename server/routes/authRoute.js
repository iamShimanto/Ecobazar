const express = require("express")
const { userSignUp, userLogIn, sendVerifyCode, verifyCode } = require("../controller/authController")
const verifyToken = require("../middleware/verifyToken")

const router = express.Router()

// ====== user signup
router.post("/signup", userSignUp)

// ======= user login
router.post("/login", userLogIn)


// ======== send verification code
router.post("/send-verify-code", verifyToken, sendVerifyCode)

// ====== === veify code
router.post("/verify-code", verifyToken, verifyCode)




module.exports = router