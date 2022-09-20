import express from 'express';
import { } from '../controllers/auth.js';

const router = express.Router();
//Create user
router.post('/signup');
//Sign in
router.post('/signin');
//Google auth
router.post('/google');

export default router;