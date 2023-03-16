const express = require("express");
const {
  getPhoneCategory,
  modifiedPhoneCategory,
} = require("../controller/phoneCategoryControllers");

const router = express.Router();

router.get("/", getPhoneCategory);
router.put("/update", modifiedPhoneCategory);

module.exports = router;
