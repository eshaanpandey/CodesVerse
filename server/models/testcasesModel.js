import mongoose from "mongoose";

const testcaseSchema = mongoose.Schema({
    input: {type: String},
    output: {type: String},
    problem: {type: mongoose.Types.ObjectId, ref: "problems"},
});

export const testcasesModel = mongoose.model("testcases", testcaseSchema);