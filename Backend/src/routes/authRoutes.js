import express from "express";

import {login, register} from "../controller/authController.js"
import { jobListings} from '../controller/jobControler.js';

const router =  express.Router();


router.post('/register',register);
router.post('/users/login',login);

router.get('/jobs',jobListings);


export default router;