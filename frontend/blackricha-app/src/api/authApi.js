import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/auth'; // Replace with your backend API base URL


const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    // Handle successful login response
    return response.data;
  } catch (error) {
    // Handle login error
    throw new Error('Failed to login');
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    // Handle successful registration response
    return response.data;
  } catch (error) {
    // Handle registration error
    throw new Error('Failed to register');
  }
};

const ForgetPassword = async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/forgot-password`, { email });
      // Handle successful password reset email sent
      return response.data;
    } catch (error) {
      // Handle error
      throw new Error('Failed to send password reset email');
    }
  };

// Export the functions for use in other parts of your app
export { login, register, ForgetPassword };