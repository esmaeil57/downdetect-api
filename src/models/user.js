const mongoose = require("../configration/db-config");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmpassword: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
});

module.exports = mongoose.model("User", userSchema);
