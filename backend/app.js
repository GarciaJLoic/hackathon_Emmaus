require("dotenv").config();
const express = require("express");
const router = require("./src/router");

const cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
    // origin: process.env.FRONTEND_URL ?? 'http://localhost:5174',
    credentials: true,
    'Access-Control-Allow-Origin':
      process.env.FRONTEND_URL ?? 'http://localhost:5173',
    allowedHeaders: ['Authorization', 'Content-Type', 'sessionId'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
)

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "NOT FOUND" });
});

module.exports = app;
