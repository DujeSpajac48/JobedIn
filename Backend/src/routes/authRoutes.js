import express from "express";
//db
import pool from "../db.js";
import {login} from "../controller/authController.js"

const router =  express.Router();


// router.get('/user',getAllUsers);

// router.post('/user',newUser);
router.post('/login',login);




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