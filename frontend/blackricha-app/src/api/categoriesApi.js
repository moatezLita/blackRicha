import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

// Fetch all categories
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};
export const getCategoryByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/name/${name}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching category with ID ${name}:`, error);
    throw new Error(`Failed to fetch category with ID ${name}`);
  }
};
// Fetch a category by ID
export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error fetching category with ID ${id}:`, error);
    throw new Error(`Failed to fetch category with ID ${id}`);
  }
};

// Create a new category
export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${BASE_URL}/categories`, categoryData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating category:', error);
    throw new Error('Failed to create category');
  }
};

// Update an existing category
export const updateCategory = async (id, categoryData) => {
  try {
    const response = await axios.put(`${BASE_URL}/categories/${id}`, categoryData);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error updating category with ID ${id}:`, error);
    throw new Error(`Failed to update category with ID ${id}`);
  }
};

// Delete a category by ID
export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error(`Error deleting category with ID ${id}:`, error);
    throw new Error(`Failed to delete category with ID ${id}`);
  }
};
