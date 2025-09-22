require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const dbConfig = require("./dbConfig/dbConfig");
const authRoutes = require("./routes/authRoute");

// ===== db
dbConfig();

// ======= middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// ======== routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
