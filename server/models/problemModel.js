import mongoose from "mongoose";

// const exampleSchema = mongoose.Schema({
//     input: String,
//     output: String,
//     explanation: String
// });

const problemSchema = mongoose.Schema({
    heading: {type: String},
    statement: {type: String},
    // exampleTestcases: {type: String},
    difficulty: {type: String, enum: ['Easy', 'Medium', 'Hard']},
    constraints: {type: String},
    // examples: [exampleSchema],
    examples:[ 
        { 
            input:  String, 
            output:  String, 
            explanation:  String 
        }],
    },
    {
        timestamps: true,
    }
);


export const problemModel = mongoose.model("problems", problemSchema);