const express = require("express");
const {
  getValeurS,
  modifiedValeurS,
  createNewStorage,
} = require("../controller/valeurSControllers");

const router = express.Router();

router.get("/", getValeurS);
router.put("/update/:id", modifiedValeurS);
router.post("/post", createNewStorage);
module.exports = router;
