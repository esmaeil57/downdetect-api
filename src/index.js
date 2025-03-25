const express = require("express");
const cors = require("cors");
const app = express();
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = process.env.PORT || 5005;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`Server is rinning on : http://localhost:${PORT}`);
});
