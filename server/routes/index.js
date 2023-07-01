import express from "express";
import authRoutes from './authRoutes.js'
import problemRoutes from './problemRoutes.js'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/problems', problemRoutes);

export default router;
