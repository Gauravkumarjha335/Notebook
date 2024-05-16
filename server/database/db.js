import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/inootbook";

const database = () => {
    mongoose.connect(URL).then(()=>{
        console.log("Database Connected Sussesflly")
    })
}

export default database;