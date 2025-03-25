const authService = require("../services/login");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "Missing email or password" });
    }

    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(404).json({ message: "Invalid email or password" });
  }
}

async function refreshToken(req, res) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "Missing token" });
    }

    const newToken = await authService.refreshToken(token);
    res.json({ newToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = {
  login,
  refreshToken,
};
