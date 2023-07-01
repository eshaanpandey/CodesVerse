import express from 'express';

import{
    addTestcase,
    updateTestcase,
    deleteTestcase,
    viewAllTestcases,
} from '../controllers/testcasesController.js';

const router = express.Router();

router.post('/addTestcase', addTestcase);
router.put('/updateTestcase/:_id', updateTestcase);
router.delete('/deleteTestcase/:_id', deleteTestcase);
router.get('/viewAllTestcase/:problemId', viewAllTestcases);

export default router;