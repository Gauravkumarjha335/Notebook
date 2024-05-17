import express from 'express'
import { logincontroller , signupcontroller } from '../controllers/authcontroller.js';


const router = express.Router();

router.get('login', logincontroller)
router.get('/signup', signupcontroller)

export default router;
