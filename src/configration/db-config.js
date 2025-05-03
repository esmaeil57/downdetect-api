const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 5005,
});

mongoose.connection.on("connected", () => {
  console.log("connected mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB error: ${err}`);
});

module.exports = mongoose;