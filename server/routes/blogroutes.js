import { createblog } from "../controllers/blogcontroller.js";
import express from 'express'
const router = express.Router();

router.post('/blog', createblog);

export default router;
