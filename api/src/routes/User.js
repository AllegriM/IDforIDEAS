const { Router } = require("express");
const {
  registerUser,
  loginUser,
  resetPassword,
  getAllUsers,
} = require("../Controllers/User");
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/resetpassword/", resetPassword);
router.get('/all',getAllUsers)

module.exports = router;
