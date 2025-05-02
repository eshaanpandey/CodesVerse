import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true },
    googleId: { type: String },
    solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
    // problemsSolved: {type: Integer},
    // role: {
    //     type: String,
    //     enum: ['User', 'Admin', 'Owner'],
    // },
    //   maxStreak: { type: Number },
    //   numberOfProblemsSolved: { type: Number },
  },

  {
    timestamps: true,
  }
);

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.JWT_SECRET);
  // "judge" me kuch bhi secret key bheji
  // "this._id" me primary key aa jayegi taaki same token 2 users ko na mile
};

userSchema.statics.findByEmailAndUsername = async ({ email, username }) => {
  const userByEmail = await UserModel.findOne({ email });
  if (userByEmail) {
    throw new Error("Email already exists!");
  }

  const userByUsername = await UserModel.findOne({ username });
  if (userByUsername) {
    throw new Error("Username already exists!");
  }

  return false;
  // if user doesn't exist
};

userSchema.statics.findByEmailOrUsernameAndPassword = async ({
  email,
  userName,
  password,
}) => {
  if (email) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does not exists");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

    return user;
  } else {
    const user = await UserModel.findOne({ userName });
    if (!user) throw new Error("User does not exists");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

    return user;
  }
};

// for hashing the password using bcrypt
userSchema.pre("save", function (next) {
  // "save" krne se pehle iss function ko call kro, pre iske liye
  const user = this;

  if (!user.isModified("password")) return next();

  // Generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    //   next mtlb pre k baad jo kaam tha usko continue kro
    if (error) return next(error);

    // Hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // Assign hashed password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("profile", userSchema);
// collection jo bnega uska naam profile rahega
