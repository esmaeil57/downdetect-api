const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken } = require("../middlewares/auth-middleware");
const { secretKey } = require("../configration/jwt-config");
const User = require("../models/user");

async function login(email, password) {
  try {
    // Trim and normalize email
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log("User not found");
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      console.log("Incorrect password");
      throw new Error("Incorrect password");
    }

    const token = generateToken(existingUser);

    return token;
  } catch (error) {
    console.log("Login error:", error.message);
    throw new Error("Invalid credentials");
  }
}

async function refreshToken(oldToken) {
  try {
    const decodedToken = verifyToken(oldToken);
    const user = User.findById(decodedToken._id);
    if (!user) {
      throw new error("User not found");
    }
    const newToken = generateToken(user);
    return newToken;
  } catch (error) {
    throw new error("Invalid");
  }
}

async function createUser(userData) {
  const { name, email, password, confirmpassword, role } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    confirmpassword: hashedPassword, // optional
    role: role || "customer", // fallback if missing
  });

  const savedUser = await newUser.save();
  return savedUser;
}

module.exports = { login, createUser, refreshToken };
