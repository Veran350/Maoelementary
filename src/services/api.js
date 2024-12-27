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
