require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./src/router");

const app = express();
app.use(cors("http://localhost:5173"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "NOT FOUND" });
});

module.exports = app;
