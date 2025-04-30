// controllers/userController.js
import { UserModel } from "../models/index.js";
import { solutionsModel } from "../models/solutionsModel.js";

export const getLoggedInUser = async (req, res) => {
  try {
    const user = req.user;
    // find all “Pass” solutions by this user, populate the problem heading
    const solved = await solutionsModel
      .find({ author: user._id, verdict: "Pass" })
      .populate({ path: "problem", select: "heading" })
      .lean();

    // map to just problem id + heading
    const solvedProblems = solved.map((sol) => ({
      _id: sol.problem._id,
      heading: sol.problem.heading,
      submittedOn: sol.submittedOn,
      submittedCode: sol.submittedCode,
      solutionId: sol._id,
    }));

    const { _id, name, username, email, createdAt } = user;
    return res.status(200).json({
      user: { _id, name, username, email, createdAt },
      solvedProblems,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
