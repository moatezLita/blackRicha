const Product = require('../models/product.model');
const { Op } = require('sequelize');
class ProductService {

  async searchProducts(searchTerm) {
    try {
      console.log('Searching for:', searchTerm);
      const products = await Product.findAll({
        where: { name: { [Op.iLike]: `%${searchTerm}%` } },
      });
      console.log('Found products:', products.length);
      return products;
    } catch (error) {
      throw new Error('Failed to get products');
    }
  }
  
  async getProductsByCategoryId(categoryId) {
    try {
      const products = await Product.findAll({
        where: { categoryId }
      });
      return products;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get products by category ID');
    }
  }

  
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
      const product = await Product.findOne(productId);
      return product;
    } catch (error) {
      throw new Error('Failed to get product by ID');
    }
  }

  async createProduct(productData) {
    try {
      const product =  Product.build(productData);
      product.save();
      return product;
    } catch (error) {
      throw new Error('Failed to create product');
    }
  }

  async updateProduct(productId, productData) {
    try {
      const product = await Product.findOne(productId );
      
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(productData, { new: true })
      await product.save();
      return product;
    } catch (error) {
      throw new Error('Failed to update product');
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findOne(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return 'Product deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  }



}
module.exports = new ProductService();
