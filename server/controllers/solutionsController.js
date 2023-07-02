import { solutionsModel } from "../models/solutionsModel.js";

const addSolution = async(req, res) =>{
    try {
        const solutionData = req.body;
        const solution = await solutionsModel.create(solutionData);
        return res.status(200).json({solution});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const getSolution = async(req, res) =>{
    try {
        const {_id} = req.params;
        const solution = await solutionsModel.findById(_id);
        return res.status(200).json({solution});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
export{
    addSolution,
    getSolution,
};