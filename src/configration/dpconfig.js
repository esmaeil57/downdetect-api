const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt_db", {
  serverSelectionTimeoutMS: 5005,
});

mongoose.connection.on("connected", () => {
  console.log("connected mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB to error : ${err}`);
});

module.exports = mongoose;
