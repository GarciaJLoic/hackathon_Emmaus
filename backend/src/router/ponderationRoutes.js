const express = require("express");
const {
  getPonderation,
  modifiedPonderation,
  deletePonderation,
  addPonderation,
} = require("../controller/ponderationControllers");

const router = express.Router();

router.get("/", getPonderation);
router.post("/post", addPonderation);
router.put("/update/:id", modifiedPonderation);
router.delete("/delete/:id", deletePonderation);

module.exports = router;
