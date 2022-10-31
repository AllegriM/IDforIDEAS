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
    return res.status(201).send({email:newUser.email,isAdmin:newUser.isAdmin});
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
    if (!isValid) return res.status(400).json({ messsage: "Invalid Password" });

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
      userFound.save();
      return res.status(200).json({message:"Password changed"});
    }
    return res.status(404).json({ message: "Email Not Found" });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    let allUsers = await User.findAll({attributes: ["email","isAdmin"]});
    return res.status(200).send(allUsers);
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
