import { Router } from 'express';
import userRoutes from './user.routes.js';
import { ApiResponse } from '../utils/apiResponse.js';

const router = Router();

// Health check endpoint
router.get('/health', (req, res) => {
  return ApiResponse.success(res, { status: 'healthy', timestamp: new Date() }, 'API is running smoothly');
});

// Resource routes
router.use('/users', userRoutes);

export default router;
