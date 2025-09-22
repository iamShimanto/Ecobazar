const Users = require("../models/authModel");
const { errorResponse } = require("../utils/responseHandler");
const bcrypt = require("bcrypt")

const userSignUp = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      return errorResponse(res, 404, "Required all fields");
    }
    if (password < 6) {
      return errorResponse(res, 401, "Password must be 6 characters");
    }

    const existUser = await Users.findOne({ $or: [{ email }, { phone }] });
    if (existUser) return errorResponse(res, 403, "User already exist");

    // const hashedPassword = await bcrypt.hash()





  } catch (error) {
    return errorResponse(res, 500, "User signup failed", error);
  }
};

module.exports = {
  userSignUp,
};
