import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js'
import productRouter from './router/productRoute.js'
const app = express();

dotenv.config();

connectDB()

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRouter);


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode  on port ${PORT}`.yellow.bold));
