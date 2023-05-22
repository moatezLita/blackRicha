const Category = require('../models/category.model');

class CategoryService {
  async getAllCategories() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      throw new Error('Failed to get categories');
    }
  }

  async getCategoryById(categoryId) {
    try {
      const category = await Category.findById(categoryId);
      return category;
    } catch (error) {
      throw new Error('Failed to get category by ID');
    }
  }

  async createCategory(categoryData) {
    try {
      const category = await Category.create(categoryData);
      return category;
    } catch (error) {
      throw new Error('Failed to create category');
    }
  }

  async updateCategory(categoryId, categoryData) {
    try {
      const category = await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
      if (!category) {
        throw new Error('Category not found');
      }
      return category;
    } catch (error) {
      throw new Error('Failed to update category');
    }
  }

  async deleteCategory(categoryId) {
    try {
      const category = await Category.findByIdAndDelete(categoryId);
      if (!category) {
        throw new Error('Category not found');
      }
      return 'Category deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete category');
    }
  }
}

module.exports = new CategoryService();
