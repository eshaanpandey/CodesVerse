import express from "express";

import { 
    addSolution,
    getSolution,
} from "../controllers/solutionsController.js";

const router = express.Router();

router.post('/addSolution', addSolution);
router.get('/getSolution/:_id', getSolution);

export default router;