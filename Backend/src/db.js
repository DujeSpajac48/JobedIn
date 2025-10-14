import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dujkan123456",
  database: "DB_JobedIn",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("Conection works:", rows[0].result);
  } catch (error) {
    console.error("Conecntion erorr", error);
  }
}

testConnection();

export default pool;
