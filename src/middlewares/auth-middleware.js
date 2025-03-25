const jwt = require("jsonwebtoken");
const { secretKey } = require("../configration/jwt-config");

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Unathorized : Missing token!" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ message: "Unathorized : Invalid token format !" });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "forbidden: invalid token" });
    }
    req.user = user;
    next();
  });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { authenticateToken, verifyToken };
