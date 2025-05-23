const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth.router");
const userRoute = require("./routes/user.router");
const videosRoute = require("./routes/helpful-videos.router")
const therapistRoutes = require("./routes/therapist.router"); 
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
app.use("/api/helpful-videos",videosRoute)
app.use("/api/therapists", therapistRoutes);

app.get("/", (req, res) => {
  res.send("API is up and running.");
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
