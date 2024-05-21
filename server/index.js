import express from 'express'
import database from './database/db.js';
import userrouter from './routes/userrouters.js'
import bodyParser from 'body-parser'
import blogrouter from './routes/blogroutes.js'

import cors from 'cors';



const PORT = 8000;
const app = express();  
app.use(bodyParser.json())



// app.use(
//     cors({
//       origin: true,
//       credentials: true,
//     })
//   );


app.use(cors());

app.use('/api/auth', userrouter);
app.use('/api/auth', blogrouter);

app.listen(PORT, () => {
    console.log(`Server Start on Port ${PORT}`)
});
database();


// djsbdbajbh