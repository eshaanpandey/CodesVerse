import mongoose from "mongoose";

const solutionSchema = mongoose.Schema({
    problem: {type: mongoose.Types.ObjectId, ref: "problems"},
    verdict: {type: String, enum: ["Accepted", "Failed"]},
    author: {type: mongoose.Types.ObjectId, ref: "user"},
    submittedCode: {type: String},
    submittedOn: Date,
});

export const solutionsModel = mongoose.model("solutions", solutionSchema);