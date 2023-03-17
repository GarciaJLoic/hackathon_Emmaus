const express = require("express");
const {
  getValeurM,
  modifiedValeurM,
  createNewMemories,
} = require("../controller/valeurMControllers");

const router = express.Router();

router.get("/", getValeurM);
router.put("/update/:id", modifiedValeurM);
router.post("/post", createNewMemories);
module.exports = router;
