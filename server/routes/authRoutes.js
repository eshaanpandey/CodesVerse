import express from "express";
import { login, signup } from "../controllers/authController.js";
import passport from "passport";
import "../config/passportGoogle.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);

// Initiates Google OAuth flow
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback: redirect user and return JWT
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // req.user contains { user, token }
    // Send JWT to client (e.g. in a cookie or in query)
    // res.redirect(`${process.env.FRONTEND_URL}/login?token=${req.user.token}`);
    res.redirect(
      `${process.env.FRONTEND_URL}/google-success?token=${req.user.token}`
    );
  }
);

export default router;
