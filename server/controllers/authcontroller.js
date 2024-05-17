import User from '../models/Usermodel.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'Gaurav';

export const logincontroller = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "This user already exists" });
    }

    // Create user
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });

    const data = {
      user: {
        id: user.id
      }
    };

    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken, message: "tsius is verma" });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');


  }
};



// import User from '../models/User'; // Import your User model here
// import { User } from '../models'; // Adjust the path based on your project structure

export const signupcontroller = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const newUser = new User({ email, name, password });

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

