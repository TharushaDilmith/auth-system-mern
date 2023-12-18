//import modules
import express from 'express';
import dotenv from 'dotenv';

//configure dotenv
dotenv.config();

//create express app
const app = express();

//define port
const port = process.env.PORT || 5000;

//define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
