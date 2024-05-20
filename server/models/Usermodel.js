import mongoose from "mongoose";
const { Schema } = mongoose;

const Userschime = mongoose.Schema({

    name: {
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true 
    },
    date:{
        type : Date,
        require : true
    }
})

const usermodel = mongoose.model('users' , Userschime)
export default usermodel;