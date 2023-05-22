const Product = require('../models/product.model');

class ProductService {
  async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw new Error('Failed to get products');
    }
  }

  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw new Error('Failed to get product by ID');
    }
  }

  async createProduct(productData) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      throw new Error('Failed to create product');
    }
  }

  async updateProduct(productId, productData) {
    try {
      const product = await Product.findByIdAndUpdate(productId, productData, { new: true });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Failed to update product');
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return 'Product deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  }
}

module.exports = new ProductService();
