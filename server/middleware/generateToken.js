const Users = require("../models/authModel");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const generateToken = async (userId) => {
  try {
    const user = await Users.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const token = await jwt.sign(
      { userId: user._id, role: user.role },
      jwtSecret,
      { expiresIn: "7d" }
    );

    return token;
  } catch (error) {
    console.error("error generate token", error);
    throw error;
  }
};

module.exports = generateToken;
