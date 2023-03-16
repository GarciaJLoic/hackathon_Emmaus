const express = require("express");
const {
  getAllConfigMini,
  modifiedConfigMini,
} = require("../controller/configMiniControllers");

const router = express.Router();

router.get("/", getAllConfigMini);
router.put("/", modifiedConfigMini);

module.exports = router;
