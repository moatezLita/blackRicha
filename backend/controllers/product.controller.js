const ProductService = require('../services/product.service');
const { CustomError } = require('../middleware/errorHandler');

class ProductController {
  
  async getProductsByCategoryId(req, res, next) {
    const { categoryId } = req.params;
    try {
      const products = await ProductService.getProductsByCategoryId(categoryId);
      // if (products.length === 0) {
      //   return next(new CustomError('No products found for the given category', 404));
      // }
      res.json(products);
    } catch (error) {
      next(new CustomError('Failed to get products by category ID', 500));
    }
  }
  
  async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      next(new CustomError('Failed to get all products', 500));
    }
  }

  async getProductById(req, res, next) {
    const { id: productId } = req.params;
    try {
      const product = await ProductService.getProductById({ where: { id: productId } });
      // if (!product) {
      //   return next(new CustomError('Product not found', 404));
      // }
      res.json(product);
    } catch (error) {
      next(new CustomError('Failed to get product by ID', 500));
    }
  }

  async createProduct(req, res, next) {
    const productData = req.body;
    try {
      const newProduct = await ProductService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      next(new CustomError('Failed to create product', 500));
    }
  }

  async updateProduct(req, res, next) {
    const { id: productId } = req.params;
    const productData = req.body;
    try {
      const updatedProduct = await ProductService.updateProduct({ where: { id: productId } }, productData);
      // if (!updatedProduct) {
      //   return next(new CustomError('Product not found', 404));
      // }
      res.json(updatedProduct);
    } catch (error) {
      next(new CustomError('Failed to update product', 500));
    }
  }

  async deleteProduct(req, res, next) {
    const { id: productId } = req.params;
    try {
      const result = await ProductService.deleteProduct({ where: { id: productId } });
      // if (result === 'Product not found') {
      //   return next(new CustomError('Product not found', 404));
      // }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      next(new CustomError('Failed to delete product', 500));
    }
  }


  
}
module.exports = new ProductController();
