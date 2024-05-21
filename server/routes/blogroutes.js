
import { createblog , Showblogdata } from "../controllers/blogcontroller.js";
import express from 'express'
const router = express.Router();

router.post('/blog', createblog);
router.post('/showblog', Showblogdata);

export default router;
