const asyncHandler = require("express-async-handler");

/**
 ** @Description Register new user
 ** @rsoute POST /api/users
 ** @Access Public
 **/
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

/**
 ** @Description Authenticate a user
 ** @rsoute POST /api/users/login
 ** @Access Public
 **/

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

/**
 ** @Description Get user data
 ** @rsoute GET /api/users/me
 ** @Access Private
 **/

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Data Display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
