const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth.router");
const userRoute = require("./routes/user.router");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
// console.log('JWT_SECRET:', process.env.JWT_SECRET);

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is rinning on : http://localhost:${PORT}`);
});
