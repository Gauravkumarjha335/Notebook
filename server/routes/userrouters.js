import express from 'express'
import { logincontroller , signupcontroller } from '../controllers/authcontroller.js';


const router = express.Router();

router.post('/login', logincontroller)
router.post('/signup', signupcontroller)

export default router;
