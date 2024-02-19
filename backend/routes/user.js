import express from "express";
const router = express.Router();
import * as userController from "../controller/user.js";

router.post("/", userController.registerUser);
router.post("/auth", userController.authUser);
router.post("/logout", userController.logoutUser);
router
  .route("/profile")
  .get(userController.getUserProfile)
  .put(userController.updateUserProfile);

export default router;
