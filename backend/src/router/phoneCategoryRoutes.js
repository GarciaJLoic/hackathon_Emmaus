const express = require("express");
const {
  getPhoneCategory,
  modifiedPhoneCategory,
} = require("../controller/phoneCategoryControllers");

const router = express.Router();

router.get("/", getPhoneCategory);
router.put("/update/:id", modifiedPhoneCategory);

module.exports = router;
