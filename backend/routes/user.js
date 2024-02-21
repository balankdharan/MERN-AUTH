import express from "express";
const router = express.Router();
import * as userController from "../controller/user.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", userController.registerUser);
router.post("/auth", userController.authUser);
router.post("/logout", userController.logoutUser);
router
  .route("/profile")
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateUserProfile);

export default router;
