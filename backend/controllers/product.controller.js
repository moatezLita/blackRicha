const ProductService = require('../services/product.service');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProductById(req, res) {
    const { id:productId } = req.params;
    try {
      const product = await ProductService.getProductById({ where: { id: productId } });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    const productData = req.body;
    try {
      const newProduct = await ProductService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProduct(req, res) {
    const {id: productId } = req.params;
    const productData = req.body;
    try {
      const updatedProduct = await ProductService.updateProduct({ where: { id: productId } }, productData);
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    const { id : productId } = req.params;
    try {
      const result = await ProductService.deleteProduct({ where: { id: productId } });
      if (result === 'Product not found') {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
