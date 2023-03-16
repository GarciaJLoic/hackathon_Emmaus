const express = require("express");
const {
  getAllPhones,
  insertPhones,
} = require("../controller/phoneControllers");

const router = express.Router();

router.get("/", getAllPhones);
router.post("/insert", insertPhones);

module.exports = router;
