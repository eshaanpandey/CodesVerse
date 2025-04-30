import mongoose from "mongoose";

const solutionSchema = mongoose.Schema({
  problem: { type: mongoose.Types.ObjectId, ref: "problems" },
  verdict: { type: String, enum: ["Pass", "Fail"] },
  author: { type: mongoose.Types.ObjectId, ref: "user" },
  submittedCode: { type: String },
  submittedOn: { type: Date, default: Date.now },
});

export const solutionsModel = mongoose.model("solutions", solutionSchema);
