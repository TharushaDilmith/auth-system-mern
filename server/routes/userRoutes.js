// import modules
import express from 'express';

//create express router
const router = express.Router();

//import controller
import {authUser, registerUser, getUserProfile, logoutUser} from '../controllers/userController.js';

//import middleware
import {protect} from '../middleware/authMiddleware.js';

//define routes
router.post('/auth',authUser);
router.post('/register', registerUser);
router.get('/profile', protect, getUserProfile);
router.post('/logout', logoutUser);

//export router
export default router;