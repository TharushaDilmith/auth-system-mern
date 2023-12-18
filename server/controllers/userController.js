//imports modules
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Desc: Auth user
// Route: POST /api/users/auth
// Access: Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Auth user'
    });
});

// Desc: Register user
// Route: POST /api/users/register
// Access: Public
const registerUser = asyncHandler(async (req, res) => {
    //get data from request body
    const { name, email, password } = req.body;
    //check if user exists
    const userExists = await User.findOne({ email });
    //if user exists, throw an error
    if (userExists) {
        res.status(400);
        throw new Error('User already exists.');
    }
    //create new user
    const user = await User.create({
        name,
        email,
        password
    });
    //if user is created, send a response
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data.');
    }
});

// Desc: Get user profile
// Route: GET /api/users/profile
// Access: Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get user profile'
    });
});

// Desc: Logout user
// Route: GET /api/users/logout
// Access: Private
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Logout user'
    });
});

//export controllers
export {
    authUser,
    registerUser,
    getUserProfile,
    logoutUser
}