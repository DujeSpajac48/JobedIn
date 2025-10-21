import express from "express";

import {login, register} from "../controller/authController.js"


const router =  express.Router();


// router.get('/user',getAllUsers);

router.post('/register',register);
router.post('/users/login',login);


router.get('/test', (req, res) => {
   console.log('✅ Test route works!');
   res.json({ message: 'Test successful' });
 });




// router.get('/user', async (req,res)=>{
//    try{
//       const [rows] = await pool.query('SELECT * FROM user');
//       res.json(rows);
//    } catch (error){
//       console.log("Pristup bazi", error);
//       res.status(500).json(
//          {message: "Db info error",
//          error: error.message,
//          stack: error.stack,
//          });
//    }
// })

export default router;