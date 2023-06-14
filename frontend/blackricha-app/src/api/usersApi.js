import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

const tokenString = localStorage.getItem('token');

let headers = {};

if (tokenString) {
  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  headers = {
    Authorization: token,
  };
}

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`,{headers: headers,  });;
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

// Fetch a single user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`,{headers: headers,  });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching user with ID ${id}:`, error);
    throw new Error(`Failed to fetch user with ID ${id}`);
  }
};

// Create a new user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData,{headers: headers,  });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

// Update an existing user
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, userData,{headers: headers,  });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating user with ID ${id}:`, error);
    throw new Error(`Failed to update user with ID ${id}`);
  }
};

// Delete a user by ID
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`,{headers: headers,  });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error deleting user with ID ${id}:`, error);
    throw new Error(`Failed to delete user with ID ${id}`);
  }
};
