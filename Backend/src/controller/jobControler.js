import pool from "../db.js";


export const jobListings = async (req,res)=>{
   try{
      console.log('Get jobs recived:');

      const [jobs] = await pool.query('SELECT * FROM jobListing');
      res.status(200).json({
         success: true,
         data: jobs  
      });

      console.log('jobs  database:', jobs);
      console.log(' Number of jobs:', jobs.length);

   

   }catch (error){
      console.log("jobListing error");
      res.status(400).json({message: 'joblisting query error'})
   }
}