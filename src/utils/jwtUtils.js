const jwt = require("jsonwebtoken");
const { secretKey, options } = require("../configration/jwt-config");

function generateToken(user) {
  if (!secretKey) {
    console.error('JWT_SECRET is undefined in jwtUtils');
    throw new Error('JWT_SECRET is not defined');
  }

  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, secretKey, options);
}

module.exports = {
  generateToken,
};
