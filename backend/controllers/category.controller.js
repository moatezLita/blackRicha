const CategoryService = require('../services/category.service');

class CategoryController {
  async getAllCategories(req, res) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCategoryById(req, res) {
    const { categoryId } = req.params;
    try {
      const category = await CategoryService.getCategoryById(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCategory(req, res) {
    const categoryData = req.body;
    try {
      const newCategory = await CategoryService.createCategory(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCategory(req, res) {
    const { categoryId } = req.params;
    const categoryData = req.body;
    try {
      const updatedCategory = await CategoryService.updateCategory(categoryId, categoryData);
      if (!updatedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCategory(req, res) {
    const { categoryId } = req.params;
    try {
      const result = await CategoryService.deleteCategory(categoryId);
      if (result === 'Category not found') {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CategoryController();
