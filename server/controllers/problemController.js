import { problemModel } from "../models/problemModel.js";

const addProblem = async(req, res) => {
    try {
        const problemData = req.body;
        const problem = await problemModel.create(problemData);
        return res.status(200).json({problem});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
};

const deleteProblem = async(req, res) =>{
    try {
        const {_id} = req.params;
        await problemModel.findByIdAndDelete(_id);
        return res.status(200).json({message: "The problem has been deleted."});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const viewProblem = async(req, res) =>{
    try {
        const {_id} = req.params;
        const problem = await problemModel.findById(_id);
        return res.status(200).json({problem});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const viewAllProblems = async(req, res) =>{
    try {
        const problems = await problemModel.find({});
        return res.status(200).json({problems});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const updateProblem = async(req, res) =>{
    try {
        const {_id} = req.params;
        const updatedProblemData = req.body;
        const updatedProblem = await problemModel.findByIdAndUpdate(_id, updatedProblemData, {
            new: true,
        });
        console.log("The problem has been updated");
        return res.status(200).json({updatedProblem});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

export{
    addProblem,
    deleteProblem,
    viewProblem,
    viewAllProblems,
    updateProblem,
};