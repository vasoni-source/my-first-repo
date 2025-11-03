import express from 'express'
import dbconnection from './db.js';
 import dotenv from 'dotenv';
// import userRoutes from './routes/user.js'
const app = express();

// app.use('/user', userRoutes)

// create a db connection here
// and impliment the connect DB funnction
 dotenv.config();
dbconnection();
app.listen(5000, () => {
    console.log('server is running on port 5000')
})