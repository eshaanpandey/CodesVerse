import mongoose from "mongoose";

const solutionSchema = mongoose.Schema({
    problem: {type: mongoose.Types.ObjectId, ref: "problems"},
    verdict: {type: String, enum: ["Passed", "Failed"]},
    
})