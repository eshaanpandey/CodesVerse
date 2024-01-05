import express from 'express';

import { addProblem, 
    updateProblem, 
    deleteProblem, 
    viewProblem,
    viewAllProblems,
} from '../controllers/problemController.js';

const router = express.Router();

router.post('/addProblem', addProblem);
router.delete('/deleteProblem/:_id', deleteProblem);
router.get('/viewProblem/:_id', viewProblem);
router.get('/viewAllProblems', viewAllProblems);
router.put('/updateProblem/:_id', updateProblem);

export default router;