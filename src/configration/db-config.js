const mongoose = require("mongoose");

// const MONGO_URI =
//   "mongodb+srv://yaqout:yaqout@cluster0.zqzqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const MONGO_URI = "mongodb://localhost:27017/jwt_db";

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 5005,
});

mongoose.connection.on("connected", () => {
  console.log("connected mongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB to error : ${err}`);
});

module.exports = mongoose;
