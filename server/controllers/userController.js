//imports modules
import asyncHandler from 'express-async-handler';

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
    res.status(200).json({
        message: 'Register user'
    });
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