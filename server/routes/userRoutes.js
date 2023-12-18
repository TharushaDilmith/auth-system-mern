// import modules
import express from 'express';

//create express router
const router = express.Router();

//import controller
import {authUser, registerUser, getUserProfile, logoutUser} from '../controllers/userController.js';


//define routes
router.post('/auth',authUser);
router.post('/register', registerUser);
router.get('/profile', getUserProfile);
router.post('/logout', logoutUser);

//export router
export default router;