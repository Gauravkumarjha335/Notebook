import usermodel from '../models/Usermodel.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'Gaurav';


//  Signup controller

export const signupcontroller = async (req, res) => {
  const { email, name, password } = req.body;

  if (email) {
    const userexist = await usermodel.findOne({ email });
    if (userexist) {
      return res.status(400).json({ error: 'User already exist with that email', email });
    }
  }

  try {
    const newUser = new usermodel({ email, name, password });

    await newUser.save();

    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};



//  Login controller

export const logincontroller = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      return res.status(200).json({ message: 'User login successful' });
    }

  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
};





//  Login with google controller

export const signupwithgoogle = (req, res) => {
  const { email, name, googleId } = req.body;
}

