const express = require("express");
const {
  getPonderation,
  modifiedPonderation,
} = require("../controller/ponderationControllers");

const router = express.Router();

router.get("/", getPonderation);
router.put("/update", modifiedPonderation);

module.exports = router;
