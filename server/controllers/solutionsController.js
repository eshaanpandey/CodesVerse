import { solutionsModel } from "../models/solutionsModel.js";
import { testcasesModel } from "../models/testcasesModel.js";
import { generateFile } from "../helper/fileHelper.js";
import { executeCpp } from "../helper/fileHelper.js";
import { UserModel } from "../models/userModel.js";

const addSolution = async (req, res) => {
  try {
    const solutionData = req.body;
    const solution = await solutionsModel.create(solutionData);
    return res.status(200).json({ solution });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getSolution = async (req, res) => {
  try {
    const { _id } = req.params;
    const solution = await solutionsModel.findById(_id);
    return res.status(200).json({ solution });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const runAProblem = async (req, res) => {
  try {
    const { language = "c++", code } = req.body;
    const { problemId } = req.params;
    const userId = req.session.passport.user._doc._id;

    // console.log("Received code: ", code);

    const testcases = await testcasesModel.find({
      problem: problemId,
      // isExample: true,
    });

    if (!code) {
      return res.status(404).json({ success: false, error: "Empty code !!" });
    }

    if (!testcases.length) {
      return res
        .status(404)
        .json({ success: false, error: "No test cases found!" });
    }

    const filePath = await generateFile(language, code);
    for (let i = 0; i < testcases.length; i++) {
      const testcase = testcases[i];
      const output = await executeCpp(filePath, testcase.input);
      // console.log("Execution Output:", output);

      const pureStringOutout = output.replace(/(?:\r\n|\r|\n)/g, "");
      const pureStringtestcaseOutput = testcase.output.replace(
        /(?:\r\n|\r|\n)/g,
        ""
      );
      const success =
        pureStringOutout.toLowerCase() ==
        pureStringtestcaseOutput.toLowerCase();

      if (!success) {
        // console.log("Tesecase failed")
        return res.status(200).json({
          verdict: "Fail",
          message: `Wrong Answer on testcase ${i + 1}`,
        });
      }
    }

    // console.log("Testcases passed successfully");
    return res
      .status(200)
      .json({ verdict: "Pass", message: `All Example testcases Passed` });
  } catch (error) {
    console.error("Error in running problem:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

const submitAProblem = async (req, res) => {
  try {
    const { language = "c++", code } = req.body;
    const { problemId } = req.params;
    const userId = req.session.passport.user._doc._id;

    const testcases = await testcasesModel.find({
      problem: problemId,
    });

    if (!code) {
      return res.status(404).json({ success: false, error: "Empty code !!" });
    }

    if (!testcases.length) {
      return res
        .status(404)
        .json({ success: false, error: "No test cases found!" });
    }

    for (let i = 0; i < testcases.length; i++) {
      const testcase = testcases[i];
      const filePath = await generateFile(language, code);
      const output = await executeCpp(filePath, testcase.input);
      const pureStringOutout = output.replace(/(?:\r\n|\r|\n)/g, "");
      const pureStringtestcaseOutput = testcase.output.replace(
        /(?:\r\n|\r|\n)/g,
        ""
      );
      const success =
        pureStringOutout.toLowerCase() ==
        pureStringtestcaseOutput.toLowerCase();

      if (!success) {
        const solution = await solutionsModel.create({
          problem: problemId,
          verdict: "Fail",
          message: `Wrong Answer on testcase ${i + 1}`,
          submittedBy: userId,
          submittedAt: new Date(),
        });
        return res.status(200).json({ solution });
      }
    }

    const solution = await solutionsModel.create({
      problem: problemId,
      verdict: "Pass",
      message: `Accepted`,
      submittedCode: code,
      author: userId,
      submittedOn: new Date(),
    });

    if (solution.verdict === "Pass") {
      // await UserModel.findByIdAndUpdate(userId, {
      //   $addToSet: { solvedProblems: problemId },
      // });
      const updated = await UserModel.findByIdAndUpdate(
        userId,
        { $addToSet: { solvedProblems: problemId } },
        { new: true }
      );
      console.log("After update, solvedProblems =", updated.solvedProblems);
    }

    return res.status(200).json({ solution });
  } catch (error) {
    console.error("Error in running problem:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export { addSolution, getSolution, runAProblem, submitAProblem };
