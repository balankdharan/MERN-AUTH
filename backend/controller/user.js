import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth " });
});
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register " });
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
