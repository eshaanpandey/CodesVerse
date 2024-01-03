import express from "express";
import authRoutes from './authRoutes.js'
import problemRoutes from './problemRoutes.js'
import testcaseRoutes from './testcasesRoutes.js'
import solutionsRoutes from './solutionsRoutes.js'
import userRoutes from './userRoutes.js'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/problems', problemRoutes);
router.use('/testcases', testcaseRoutes);
router.use('/solutions', solutionsRoutes);
router.use('/user', userRoutes);

export default router;
