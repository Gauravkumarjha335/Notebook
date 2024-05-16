import express from 'express'
import database from './database/db.js';
import auth from './routes/auth.js'

const PORT = 8000;
const app = express();

app.use('/api/auth', auth);

app.listen(PORT, () => {
    console.log(`Server Start on Port ${PORT}`)
});
database();


// djsbdbajbh