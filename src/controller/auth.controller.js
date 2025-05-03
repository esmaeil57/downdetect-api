const { loginSchema, registerSchema } = require("../validators/auth.validator");
const authService = require("../services/auth.service");

async function createUser(req, res) {
  try {
    const validation = registerSchema.safeParse(req.body);

    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    let { email, password, name, confirmPassword, role } = req.body;
    
    const userData = {
      email,
      password,
      name,
      confirmPassword,
      role, 
    };
    
    const user = await authService.createUser(userData); // ✅ use authService
    res.status(201).json({ user: user, message: "User created success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const validation = loginSchema.safeParse(req.body);

    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    const { email, password } = req.body;

    const token = await authService.login(email, password);
    res.json({ token: token });
  } catch (error) {
    res.status(401).json({ message: "invalid " });
  }
}

async function refreshToken(req, res) {
  try {
    const { token } = req.body;
    const newToken = await authService.login(token);
    // console.log(newToken);
    res.json({ newToken: newToken });
  } catch (error) {
    // console.log(error);
    res.status(401).json({ message: "invalid" });
  }
}

module.exports = {
  login,
  refreshToken,
  createUser,
};
