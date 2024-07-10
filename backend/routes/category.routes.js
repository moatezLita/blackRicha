const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Category routes
router.get('/', CategoryController.getAllCategories);
router.get('/:categoryId', CategoryController.getCategoryById);
router.get('/name/:name', CategoryController.getCategoryByName);
router.post('/', CategoryController.createCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
