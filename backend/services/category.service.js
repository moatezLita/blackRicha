const Category = require('../models/category.model');

class CategoryService {
  async getAllCategories() {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      throw new Error('Failed to get categories');
    }
  }
  
  async getCategoryByName(categoryName) {
    try {
      const category = await Category.findOne(categoryName);
      return category;
    } catch (error) {
      throw new Error('Failed to get category by ID');
    }
  }

  async getCategoryById(categoryId) {
    try {
      const category = await Category.findOne(categoryId);
      return category;
    } catch (error) {
      throw new Error('Failed to get category by ID');
    }
  }

  async createCategory(categoryData) {
    try {
      const category =  Category.build(categoryData);
      await category.save();
      return category;
    } catch (error) {
      throw new Error('Failed to create category');
    }
  }

  async updateCategory(categoryId, categoryData) {
    try {
      const category = await Category.findOne(categoryId );
      if (!category) {
        throw new Error('Category not found');
      }
      await category.update(categoryData, { new: true })
      await category.save();
      return category;
    } catch (error) {
      throw new Error('Failed to update category');
    }
  }

  async deleteCategory(categoryId) {
    try {
      const category = await Category.findOne(categoryId);
      if (!category) {
        throw new Error('Category not found');
      }
      await category.destroy();
      return 'Category deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete category');
    }
  }
}

module.exports = new CategoryService();
