import express from 'express';
import { initialController } from '../controller/initialController.js';

const router = express.Router();

router.get('/', initialController);

export default router;