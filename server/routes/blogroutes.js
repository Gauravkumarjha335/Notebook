
import { createblog, Showblogdata, deleteblogdata, updateblogdata } from "../controllers/blogcontroller.js";
import express from 'express'
const router = express.Router();

router.post('/blog', createblog);
router.get('/showblog', Showblogdata);
router.put('/updateblog/:id', updateblogdata);
router.delete('/deleteblog/:id', deleteblogdata);

export default router;
