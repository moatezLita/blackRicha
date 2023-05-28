import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

// Fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching product with ID ${id}:`, error);
    throw new Error(`Failed to fetch product with ID ${id}`);
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating product:', error);
    throw new Error('Failed to create product');
  }
};

// Update an existing product
export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}`, productData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating product with ID ${id}:`, error);
    throw new Error(`Failed to update product with ID ${id}`);
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error deleting product with ID ${id}:`, error);
    throw new Error(`Failed to delete product with ID ${id}`);
  }
};
