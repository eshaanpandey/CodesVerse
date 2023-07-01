import { problemModel } from "../models/problemModel";
import { testcasesModel } from "../models/testcasesModel";

const addTestcase = async(req, res) =>{
    try {
        const testcaseData = req.body;
        const testcase = await testcasesModel.create(testcaseData);
        return res.status(200).json({testcase});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const updateTestcase = async(req, res) =>{
    try {
        const {_id} = req.params;
        const updatedTestcaseData = req.body;
        const updatedTestcase = await testcasesModel.findByIdAndUpdate(_id, updatedTestcaseData, {
            new: true,
        });
        console.log("The testcase has been updated.");
        return res.status(200).json({updatedTestcase});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const deleteTestcase = async(req, res) =>{
    try {
        const {_id} = req.params;
        await testcasesModel.findByIdAndDelete(_id);
        console.log("The testcase has been deleted.");
        return res.status(200).json({});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

const viewAllTestcases = async(req, res) =>{
    try {
        const {problemId} = req.params;
        const allTestcases = await testcasesModel.find({problem: problemId});
        return res.status(200).json({allTestcases});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}

export{
    addTestcase,
    updateTestcase,
    deleteTestcase,
    viewAllTestcases,
};