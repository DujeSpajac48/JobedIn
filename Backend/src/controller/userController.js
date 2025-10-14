import pool from "../db";

export const getAllUsers = async (res,req)=>{
   try{
      const [rows] = await pool.query('SELECT * FROM user');
      res.status(200).json(rows);
   }catch (e){
      console.log("User get error: ",e);
   }
}


export const uploadFile = async (req, res) => {
  try {
    const { employee_id } = req.body;
    const filePath = req.file.path; 

    // save file route
    await pool.query('UPDATE application SET filePath = ? WHERE employee_id = ?', [filePath, employee_id]);

    res.status(200).json({ message: 'Datoteka uspješno prenesena.', filePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Greška pri uploadu datoteke.' });
  }
};
