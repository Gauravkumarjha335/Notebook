import express from 'express'
import User from "../models/signinauth.js";
import  JsonWebTokenError  from 'jsonwebtoken';
const router = express.Router();
const jwt = JsonWebTokenError;

const JWT_SECRET = 'Gaurav';


// create route for new user

router.post('/createroute', [
    // body('name', 'Enter a valid name').isLength({ min: 3 }),
    // body('email', 'Enter a valid email').isEmail(),
    // body('password', 'Password must be atlest 5 char').isLength({ min: 5 })
], async (req, res) => {
    try {
        let user = await user.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "this user is already exist" })
        }

        // create user   

        user = await User.create({
            name : req.body.name,
            password : req.body.password,
            email : req.body.email,
        })


        const data = {
            user : {
                id : user.id
            }
        }
        const authtocken = jwt.sign(data, JWT_SECRET)
        res.json({authtocken})

      } catch (error) {
        console.error(error.message);

    }
})

export default router;
