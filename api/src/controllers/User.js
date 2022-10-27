const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = process.env;

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, PRIVATE_KEY);
};

module.exports = {
  generateAccessToken,
};
