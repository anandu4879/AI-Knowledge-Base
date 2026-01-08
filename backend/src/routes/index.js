import express from 'express';
import { healthCheck } from '../controllers/healthController.js';
import{createTestUser} from '../controllers/userController.js';
import authRoutes from './authRoutes.js';
import profileRoutes from './profileRoutes.js';

const router= express.Router();

router.get("/health",healthCheck);
router.get("/test-user",createTestUser);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

export default router;

