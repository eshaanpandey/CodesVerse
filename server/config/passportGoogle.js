import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { UserModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find or create the user by Google ID
        let user = await UserModel.findOne({ googleId: profile.id });
        if (!user) {
          // Derive username from email, falling back to a random string
          const emailLocal = profile.emails[0].value.split("@")[0];
          const base = emailLocal.replace(/\W/g, "") || "user";
          const username = base + "_" + nanoid(6);

          user = await UserModel.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            username,
            password: nanoid(12),
          });
        }
        // Issue JWT
        const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET);
        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
