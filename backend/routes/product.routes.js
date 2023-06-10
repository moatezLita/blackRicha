const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const authenticate = require('../middleware/authenticate');

// Product routes
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

router.get('/category/:categoryId', ProductController.getProductsByCategoryId);

module.exports = router;
