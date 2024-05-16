import mongoose from "mongoose";
const {Schema} = mongoose;

const NotesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type : String,
        require : true
    },
    date:{
        type : date,
        require : true
    }

})

module.exports = mongoose.model('notes' , NotesSchema)