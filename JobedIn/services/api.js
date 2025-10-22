import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:3000/api"; // iOS SIMULATOR 

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const userAPI = {
  register: async (userData) => {
    try {
      const res = await api.post("/register", userData); //  /api/register
      return res.data;
    } catch (error) {
      console.log("Register error:", error.response?.status, error.response?.data || error.message);
      throw error.response?.data || { message: "Registration failed" };
    }
  },

  login: async (email, password) => {
    try {

      const res = await api.post("/users/login", { email, password }); // /api/users/login
      return res.data; // { token, user }
    } catch (error) {
      console.log("Login error:",error.message);
      throw error.response?.data || { message: "Login failed" };
    }
  },
};

export const jobAPI ={
  getJobListings: async () => {
    try{
      const jobs = await api.get('/jobs');// /api/jobs
      return jobs.data;
    } catch (e){
      console.log("getJob api error: ", e.response?.status || e.message);
      throw e.response?.data || { message: "Job listing failed"}
    }
  }
}