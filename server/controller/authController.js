const Users = require("../models/authModel");
const { errorResponse, successResponse } = require("../utils/responseHandler");
const bcrypt = require("bcrypt");

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
    if (!email || !password){
      return errorResponse(res, 404, "Required All Field");
    }

    const existUser = await Users.findOne({email})
    if(!existUser) {
      return errorResponse(res, 404, "User Not Found")
    }

    const checkPassword = await bcrypt.compare(password, existUser.password)
    if(!checkPassword){
      return errorResponse(res, 403, "Password is wrong")
    }

    










  } catch (error) {
    return errorResponse(res, 500, "User login failed", error);
  }
};

module.exports = {
  userSignUp,
  userLogIn,
};
