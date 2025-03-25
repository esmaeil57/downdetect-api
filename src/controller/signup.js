const userService = require("../services/signup");

async function createUser(req, res) {
  try {
    let { email, password, name, confirmPassword } = req.body;

    if (!email) {
      res.status(400).json({ message: "Missing email" });
    }

    if (!password) {
      res.status(400).json({ message: "Missing password" });
    }

    if (!name) {
      res.status(400).json({ message: "Missing name" });
    }

    if (!confirmPassword) {
      res.status(400).json({ message: "Missing confirmPassword" });
    }

    if (password !== confirmPassword) {
      res
        .status(400)
        .json({ message: "Password and confirmPassword do not match" });
    }

    var userData = {
      email,
      password,
      name,
      confirmPassword,
    };

    const user = await userService.createUser(userData);
    res.status(201).json({ user: user, message: "User created success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}
module.exports = { createUser };
