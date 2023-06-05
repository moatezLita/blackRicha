import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

// Fetch all orders
export const getOrdersByUserId = async (UserId) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/user/${UserId}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching order with userID ${UserId}:`, error);
    throw new Error(`Failed to fetch order with ID ${UserId}`);
  }
};

export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching orders:', error);
    throw new Error('Failed to fetch orders');
  }
};

// Fetch an order by ID
export const getOrderById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching order with ID ${id}:`, error);
    throw new Error(`Failed to fetch order with ID ${id}`);
  }
};

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating order:', error);
    throw new Error('Failed to create order');
  }
};

// Update an existing order
export const updateOrder = async (id, orderData) => {
  try {
    const response = await axios.put(`${BASE_URL}/orders/${id}`, orderData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating order with ID ${id}:`, error);
    throw new Error(`Failed to update order with ID ${id}`);
  }
};

// Delete an order by ID
export const deleteOrder = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/orders/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error deleting order with ID ${id}:`, error);
    throw new Error(`Failed to delete order with ID ${id}`);
  }
};
