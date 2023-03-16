const express = require("express");
const { getEtat, modifiedEtat } = require("../controller/etatControllers");

const router = express.Router();

router.get("/", getEtat);
router.put("/update", modifiedEtat);

module.exports = router;
