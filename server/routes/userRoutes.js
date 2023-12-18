// import modules
import express from 'express';

//create express router
const router = express.Router();

//import controller
import {authUser} from '../controllers/userController.js';


//define routes
router.post('/auth',authUser);

//export router
export default router;