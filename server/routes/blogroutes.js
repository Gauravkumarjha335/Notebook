import { createblog } from "../controllers/blogcontroller.js";
import express from 'express'
const router = express.Router();

router.get('/blog', createblog);

export default router;
