//import modules
import express from 'express';
import dotenv from 'dotenv';

//import middleware
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

//import routes
import userRoutes from './routes/userRoutes.js';

//configure dotenv
dotenv.config();

//import database
import connectDB from './config/db.js';

//connect to database
connectDB();

//create express app
const app = express();

//configure express to accept json data in the body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//define port
const port = process.env.PORT || 5000;

//define a route
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//define error middleware
app.use(notFound);
app.use(errorHandler);

//listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
