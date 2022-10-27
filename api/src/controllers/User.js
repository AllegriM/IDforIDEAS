const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = process.env;
const { User } = require("../db");
const bcrypt = require("bcrypt");

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, PRIVATE_KEY);
};

const registerUser = async (req, res, next) => {
  let { email, password, isAdmin } = req.body;

  try {
    password = await bcrypt.hash(password, 13);
    const newUser = await User.create({ email, password, isAdmin });
    return res.send(newUser);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    const userFound = await User.findByPk(email);
    if (!userFound) {
      return res.status(404).json({ message: "Email not found" });
    }
    const isValid = await bcrypt.compare(password, userFound.password);
    if (!isValid) return res.status(400).json({ message: "Invalid Password" });

    const accesToken = generateAccessToken(userFound);
    return res.status(200).json({
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      accessToken: accesToken,
    });
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let userFound = await User.findByPk(email);
    if (userFound) {
      await userFound.set({ password });
      productFound.save();
      return res.json({ result: productFound });
    }
    return res.json({ result: "Product Not Found" });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let allUsers = await User.findAll();
    return res.json({ result: allUsers });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateAccessToken,
  registerUser,
  loginUser,
  resetPassword,
  getAllUsers,
};
