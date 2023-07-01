import mongoose from "mongoose";

const problemSchema = mongoose.Schema({
    heading: {type: String},
    statement: {type: String},
    // exampleTestcases: {type: String},
    difficulty: {type: String, enum: ['Easy', 'Medium', 'Hard']},
    constraints: {type: String},
    },
    {
        timestamps: true,
    }
);


export const problemModel = mongoose.model("problems", problemSchema);