const express = require("express");
// const movieRoutes = require("./movieRoutes");
const userRoutes = require("./userRoutes");
const phoneRoutes = require("./phoneRoutes");
const configMiniRoutes = require("./configMiniRoutes");
const etatRoutes = require("./etatRoutes");
const phoneCategoryRoutes = require("./phoneCategoryRoutes");

const router = express.Router();

router.use("/phone", phoneRoutes);
router.use("/users", userRoutes);
router.use("/configmini", configMiniRoutes);
router.use("/etat", etatRoutes);
router.use("/phonecategory", phoneCategoryRoutes);

module.exports = router;
