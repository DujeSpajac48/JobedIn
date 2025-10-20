import axios from 'axios';
import { Platform } from 'react-native';

const API_BASE_URL = Platform.OS === 'android'
  ? 'http://10.0.2.2:3000/api' // Android emulator
  : 'http://localhost:3000/api'; // iOS simulator

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

  login: async (email, password) => {
    try {
      // console.log('login request:', { email, password });
      
      // POST /api/users/login
      const response = await api.post('/users/login', { 
        email: email, 
        password: password 
      });
      
      // console.log(' lggin response:', response.data);
      return response.data;
      
    } catch (error) {
      console.log('Login API error:', error.response?.data || error.message);
      throw error.response?.data || { message: 'Login failed' };
    }
  }
};