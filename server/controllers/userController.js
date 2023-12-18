//imports modules
import asyncHandler from 'express-async-handler';

// Desc: Auth user
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Auth user'
    });
});

//export controller
export {
    authUser
}