import mongoose from "mongoose";

const solutionSchema = mongoose.Schema({
    problem: {type: mongoose.Types.ObjectId, ref: "problems"},
    verdict: {type: String, enum: ["Accepted", "Failed"]},
    author: {type: mongoose.Types.ObjectId, ref: "user"},
    submittedOn: Date,
});

export const solutionModel = mongoose.model("solutions", solutionSchema);