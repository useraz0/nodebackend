const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/users"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
  )
);

// Handle unhadled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  server.close(() => process.exit(1));
});
