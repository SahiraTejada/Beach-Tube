import express from 'express';
import {sigin, signup} from '../controllers/auth.js';

const router = express.Router();
//Create user
router.post('/signup',signup);
//Sign in
router.post('/signin',sigin);
//Google auth
router.post('/google');

export default router;