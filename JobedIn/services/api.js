import axios from 'axios';

//SIMULATOR
const API_BASE_URL = 'http://localhost:3000/api';


// const API_BASE_URL = 'http://192.168.1.100:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const userAPI = {
  register: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Network error' };
    }
  },
};

login: async (email, password) => {
  try {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
}