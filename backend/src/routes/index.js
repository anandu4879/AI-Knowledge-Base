import express from 'express';
import { healthCheck } from '../controllers/healthController.js';
import{createTestUser} from '../controllers/userController.js';

const router= express.Router();

router.get("/health",healthCheck);
router.get("/test-user",createTestUser);

export default router;

