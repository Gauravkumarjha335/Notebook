import mongoose from "mongoose";
const { Schema } = mongoose;

const signscima = mongoose.Schema({

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

export default signscima;