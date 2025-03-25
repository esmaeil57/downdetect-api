const jwt = require("jsonwebtoken");
const { secretKey, options } = require("../configration/jwt-config");

function generateToken(user) {
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
