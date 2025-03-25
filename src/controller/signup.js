const userService = require("../services/signup");

async function createUser(req, res) {
  try {
    let { email, password, name, confirmPassword } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Missing email" });
    }

    if (!password) {
      return res.status(400).json({ message: "Missing password" });
    }

    if (!name) {
      return res.status(400).json({ message: "Missing name" });
    }

    if (!confirmPassword) {
      return res.status(400).json({ message: "Missing confirmPassword" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirmPassword do not match" });
    }

    const userData = {
      email,
      password,
      name,

    };

    const user = await userService.createUser(userData);
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

module.exports = { createUser };
