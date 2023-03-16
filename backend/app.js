const cors = require("cors");
require("dotenv").config();
const express = require("express");
const router = require("./src/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(`http://localhost:5173`));
app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "NOT FOUND" });
});

module.exports = app;
