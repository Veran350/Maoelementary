import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Backend URL from .env
});

// Example API function for user registration
export const registerUser = async (userData) => {
  try {
    const response = await API.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data || error.message);
    throw error;
  }
};

// API function for user login
export const loginUser = async (userData) => {
  try {
    const response = await API.post('/api/auth/login', userData);
    return response.data;  // Contains the JWT token
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error;
  }
};
