import express from 'express';
import { upload } from '../middlewares/upload.js';
import { uploadFile } from '../controllers/userController.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);

export default router;
