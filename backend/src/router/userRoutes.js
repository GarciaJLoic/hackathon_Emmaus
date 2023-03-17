const express = require("express");

const {
  getAllUsers,
  getUserById,
  postUser,
  upDateUser,
  getUserWithPasswordAndPassToNext,
} = require("../controller/userControllers");
const {
  HashPassword,
  DeHashPassword,
} = require("../authMiddlewares/passwordHandlers");
const { sendToken, verifyToken } = require("../authMiddlewares/tokenHandlers");

const router = express.Router();

router.post("/register", HashPassword, postUser);
router.post(
  "/login",
  getUserWithPasswordAndPassToNext,
  DeHashPassword,
  sendToken
);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX WALL WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW

router.use(verifyToken);

router.put("/update", HashPassword, upDateUser);

module.exports = router;
