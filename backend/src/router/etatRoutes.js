const express = require("express");
const {
  getEtat,
  modifiedEtat,
  addEtat,
  deleteEtat,
} = require("../controller/etatControllers");

const router = express.Router();

router.get("/", getEtat);
router.post("/post", addEtat);
router.put("/update/:id", modifiedEtat);
router.delete("/delete/:id", deleteEtat);

module.exports = router;
