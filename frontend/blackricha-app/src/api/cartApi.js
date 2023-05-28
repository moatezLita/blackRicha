import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

// Fetch all carts
export const getAllCarts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carts`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching carts:', error);
    throw new Error('Failed to fetch carts');
  }
};

// Fetch the cart for a user by user ID
export const getCartByUserId = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${userId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching cart for user with ID ${userId}:`, error);
    throw new Error(`Failed to fetch cart for user with ID ${userId}`);
  }
};

// Add a product to the cart for a user
export const addToCart = async (userId, productId) => {
  try {
    const response = await axios.post(`${BASE_URL}/carts/${userId}`, { productId });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error adding product with ID ${productId} to cart for user with ID ${userId}:`, error);
    throw new Error(`Failed to add product to cart for user with ID ${userId}`);
  }
};

// Remove a product from the cart for a user
export const removeFromCart = async (userId, productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/carts/${userId}/${productId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error removing product with ID ${productId} from cart for user with ID ${userId}:`, error);
    throw new Error(`Failed to remove product from cart for user with ID ${userId}`);
  }
};

// Update the quantity of a product in the cart for a user
export const updateCartItemQuantity = async (userId, productId, quantity) => {
  try {
    const response = await axios.put(`${BASE_URL}/carts/${userId}/${productId}`, { quantity });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating quantity for product with ID ${productId} in cart for user with ID ${userId}:`, error);
    throw new Error(`Failed to update quantity in cart for user with ID ${userId}`);
  }
};
