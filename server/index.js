import express from 'express'
import database from './database/db.js';
import userrouter from './routes/userrouters.js'
import bodyParser from 'body-parser'

const PORT = 8000;
const app = express();
app.use(bodyParser.json())


app.use('/api/auth', userrouter);

app.listen(PORT, () => {
    console.log(`Server Start on Port ${PORT}`)
});
database();


// djsbdbajbh