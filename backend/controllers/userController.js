const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 ** @Description Register new user
 ** @rsoute POST /api/users
 ** @Access Public
 **/
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  res.json({message:"Register user"})
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
