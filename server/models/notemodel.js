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
        type : Date,
        default: Date.now,
    }
})

const notemodel = mongoose.model('notes' , NotesSchema);
export default notemodel;