import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pool from "./db.js";
import userRoutes from "./routes/authRoutes.js";
import cors from "cors";

// ---  Ovo osigurava da dotenv pronade .env koji je jedan nivo iznad /src     stack overflow + youtube kod - strasno ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "../.env") });


// xpress setup ---
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", userRoutes);

// postman test route
app.get("/user", async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM `user`");
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// mental health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Database connection test
const testDatabaseConnection = async () => {
  try {
    const [result] = await pool.query("SELECT 1 + 1 AS result");
    console.log("DB connected successfully");
    console.log(result);
  } catch (error) {
    console.log("DB connection failed:", error.message);
  }
};

// Start server
app.listen(PORT, async () => {
  console.log(`{ PORT: ${PORT} }`);
  console.log(` Server running on http://localhost:${PORT}`);
  await testDatabaseConnection();
});
