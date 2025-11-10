import express from 'express'
import dbconnection from './db.js';
 import dotenv from 'dotenv';
// import userRoutes from './routes/user.js'
import { userRoutes ,productRoutes,orderRoutes, cartRoutes} from './routes/index.js';
const app = express();
app.use(express.json())
app.use('/user', userRoutes)
app.use('/product',productRoutes)
app.use('/order',orderRoutes)
app.use('/cart',cartRoutes)
// create a db connection here
// and impliment the connect DB funnction
 dotenv.config();
dbconnection();
app.listen(5000, () => {
    console.log('server is running on port 5000')
})