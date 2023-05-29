const CategoryService = require('../services/category.service');
const { CustomError } = require('../middleware/errorHandler');

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      next(new CustomError('Failed to get all categories', 500));
    }
  }

  async getCategoryById(req, res, next) {
    const { id: categoryId } = req.params;
    try {
      const category = await CategoryService.getCategoryById({ where: { id: categoryId } });
      if (!category) {
        return next(new CustomError('Category not found', 404));
      }
      res.json(category);
    } catch (error) {
      next(new CustomError('Failed to get category by ID', 500));
    }
  }

  async createCategory(req, res, next) {
    const categoryData = req.body;
    try {
      const newCategory = await CategoryService.createCategory(categoryData);
      res.status(201).json(newCategory);
    } catch (error) {
      next(new CustomError('Failed to create category', 500));
    }
  }

  async updateCategory(req, res, next) {
    const { id: categoryId } = req.params;
    const categoryData = req.body;
    try {
      const updatedCategory = await CategoryService.updateCategory({ where: { id: categoryId } }, categoryData);
      if (!updatedCategory) {
        return next(new CustomError('Category not found', 404));
      }
      res.json(updatedCategory);
    } catch (error) {
      next(new CustomError('Failed to update category', 500));
    }
  }

  async deleteCategory(req, res, next) {
    const { id: categoryId } = req.params;
    try {
      const result = await CategoryService.deleteCategory({ where: { id: categoryId } });
      if (result === 'Category not found') {
        return next(new CustomError('Category not found', 404));
      }
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      next(new CustomError('Failed to delete category', 500));
    }
  }
}

module.exports = new CategoryController();
