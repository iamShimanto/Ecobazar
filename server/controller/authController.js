const generateToken = require("../middleware/generateToken");
const Users = require("../models/authModel");
const { errorResponse, successResponse } = require("../utils/responseHandler");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");

const userSignUp = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      return errorResponse(res, 404, "Required all fields");
    }
    if (password.length < 6) {
      return errorResponse(res, 401, "Password must be 6 characters");
    }

    const existUser = await Users.findOne({ $or: [{ email }, { phone }] });
    if (existUser) return errorResponse(res, 403, "User already exist");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      name,
      phone,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    newUser.password = undefined;
    newUser.verifyCode = undefined;

    return successResponse(res, 200, "User signup successfully", newUser);
  } catch (error) {
    return errorResponse(res, 500, "User signup failed", error);
  }
};

const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 404, "Required All Field");
    }

    const existUser = await Users.findOne({ email });
    if (!existUser) {
      return errorResponse(res, 404, "User Not Found");
    }

    const checkPassword = await bcrypt.compare(password, existUser.password);
    if (!checkPassword) {
      return errorResponse(res, 403, "Password is wrong");
    }

    const token = await generateToken(existUser._id);
    if (!token) return errorResponse(res, 401, "Something went wrong");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    });

    existUser.password = undefined;

    return successResponse(
      res,
      200,
      "User Login successfully",
      (data = { existUser, token })
    );
  } catch (error) {
    return errorResponse(res, 500, "User login failed", error);
  }
};

const sendVerifyCode = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return errorResponse(res, 404, "Email not found");
    const existUser = await Users.findOne({ email });
    if (!existUser) {
      return errorResponse(res, 404, "User not found");
    }

    if (existUser.isVerified) {
      return errorResponse(res, 400, "User already verified");
    }
    if (Date.now() < existUser.verifyCodeExpiry) {
      return errorResponse(res, 400, "Verify code already sent to your email");
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + 5 * 60 * 1000;

    existUser.verifyCode = code;
    existUser.verifyCodeExpiry = expiry;

    await sendEmail(
      existUser.email,
      "Email verification code",
      code,
      "Verify your account"
    );

    await existUser.save();
    return successResponse(res, 200, "Verify code sent successfully");
  } catch (error) {
    return errorResponse(res, 500, "Send verify code failed", error);
  }
};

const verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email) {
      return errorResponse(res, 404, "Email not found");
    }
    if (!code) {
      return errorResponse(res, 404, "Verify code not found");
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return errorResponse(res, 404, "User not found");
    }
    if (user.isVerified) {
      return errorResponse(res, 400, "User already verified");
    }

    if (!user.verifyCode || !user.verifyCodeExpiry) {
      return errorResponse(res, 400, "No code set");
    }

    if (Date.now() > user.verifyCodeExpiry) {
      return errorResponse(res, 400, "Code expired");
    }

    if (code != user.verifyCode) {
      return errorResponse(res, 400, "Invalid code");
    }

    user.isVerified = true;
    user.verifyCode = null;
    user.verifyCodeExpiry = null;
    await user.save();

    return successResponse(res, 200, "User verification successfully");
  } catch (error) {
    return errorResponse(res, 500, "User verify failed");
  }
};

module.exports = {
  userSignUp,
  userLogIn,
  sendVerifyCode,
  verifyCode,
};
