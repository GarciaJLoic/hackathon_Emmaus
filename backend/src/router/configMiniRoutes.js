const express = require("express");
const {
  getAllConfigMini,
  modifiedConfigMini,
  // createNewConfigMini,
} = require("../controller/configMiniControllers");

const router = express.Router();

router.get("/", getAllConfigMini);
router.put("/update", modifiedConfigMini);
// router.post("/post", createNewConfigMini);
module.exports = router;
