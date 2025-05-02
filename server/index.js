import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import session from "express-session";

import db from "./database/index.js";
import router from "./routes/index.js";

import routeConfig from "./config/routeConfig.js";

routeConfig(passport);

const app = express();
app.use(cors());

app.use(
  helmet({
    crossOriginOpenerPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "judge",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use("/judge", router);

app.listen(process.env.PORT, () => {
  db()
    .then(() => {
      console.log("Server running on port:", process.env.PORT);
    })
    .catch((error) => {
      console.log("Server connection failed");
      console.log(error);
    });
});
