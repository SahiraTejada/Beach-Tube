import express from 'express';
import {gooogleAuth, signin, signup } from '../controllers/auth.js';

const router = express.Router();
//Create user
router.post('/signup',signup);
//Sign in
router.post('/signin',signin);
//Google auth
router.post('/google',gooogleAuth);

export default router;