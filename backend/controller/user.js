import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { generateToken } from "../utils/commonUtil.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth " });
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid details");
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout " });
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user profile " });
});
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile " });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
