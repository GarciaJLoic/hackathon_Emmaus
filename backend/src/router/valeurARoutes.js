const express = require("express");
const {
  getValeurA,
  modifiedValeurA,
} = require("../controller/valeurAControllers");

const router = express.Router();

router.get("/", getValeurA);
router.put("/update/:id", modifiedValeurA);

module.exports = router;
