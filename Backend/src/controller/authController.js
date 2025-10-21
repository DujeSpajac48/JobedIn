import bcrypt from "bcryptjs";
import pool from "../db.js";
import jwt from "jsonwebtoken";

const signToken = (payload) =>
   jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '1h' });
 
export const login = async (req, res)=>{
   try{
      console.log('Login request received:', req.body);
      const { email, password} = req.body;

      if ( !email || !password) {
         return res.status(400).json({message: "Every field isnt filled(login)"});
      }

      const [rows] = await pool.query('SELECT id,name,email,password FROM user WHERE email=?',[email]);
      if (rows.length ==0){
         return res.status(400).json({ message: 'Email or pass incorect' });
      }

      const user = rows[0];

      
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(401).json({ message: 'Email or pass incorect' });
    }


    const token = signToken({ sub: user.id });

    return res.status(200).json({
      success: true,
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (e) {
    console.error('Login error:', e);
    res.status(400).json({ message: "error", error: e.message });
  }
};


export const register = async( req, res)=>{
   try {
      const { name,lastName,email,password,role} = req.body;

      if (!name || !lastName || !email || !password || role==null){
         return res.status(400).json({message: "A field was left empty"});
      }

      //checking if the mail is taken
      const [exists] = await pool.query('SELECT id FROM user WHERE  email=?',[email]);
      if (exists.length) {
         return res.status(409).json({message: "Sorry, that email isnt available"});
      }
      const hash = await bcrypt.hash(password,10);
      const [result] =  await pool.query(
         'INSERT INTO user (name,lastName,email,password,role) VALUES (?, ?, ?, ?, ?)',
         [name,lastName,email,hash,role]
      );
      return res.status(200).json({success: true, message: "User created"});

   }catch (e){
      console.log("Reg error",e);
      return res.status(500).json({message: "Registration failed"});
   }
};
