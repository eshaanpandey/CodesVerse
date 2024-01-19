import express from "express";

import passport from "passport";

import { 
    addSolution,
    getSolution,
    runAProblem, 
    submitAProblem
} from "../controllers/solutionsController.js";

const router = express.Router();

router.post('/addSolution', addSolution);
router.get('/getSolution/:_id', getSolution);

router.post("/run/:problemId", passport.authenticate("jwt"), runAProblem);
router.post("/submit/:problemId", passport.authenticate("jwt"), submitAProblem);

export default router;