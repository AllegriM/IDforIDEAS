const bcrypt = require("bcrypt");
const { Router } = require("express");
const { User } = require("../db");

const router = Router();

router.post("/register", async (req, res, next) => {
  let { email, password ,isAdmin} = req.body;

  try {
    password = await bcrypt.hash(password, 13);
    const newUser = await User.create({ email, password,isAdmin});
    return res.send(newUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  try {
    const usedFound = await User.findOne({ where: { email } });
    if (!usedFound) {
        return res.status(404).json({"message":"Email not found"})
    }
    const isValid = await bcrypt.compare(password,usedFound.password)
    if (!isValid) {
        return res.status(400).json({"message": "Invalid Password"})
    }
    return res.status(200).send(usedFound);
  } catch (error) {
    next(error);
  }
});

module.exports = router;