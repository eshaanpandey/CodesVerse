import express from "express";
import passport from "passport";
import { getLoggedInUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", passport.authenticate("jwt"), getLoggedInUser);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getLoggedInUser
);

export default router;
