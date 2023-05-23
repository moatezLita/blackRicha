const CartService = require('../services/cart.service');

class CartController {
  async getAllCarts(req, res) {
    try {
      const carts = await CartService.getAllCarts();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getCartByUserId(req, res) {
    const { id : userId } = req.query;
    try {
      const cart = await CartService.getCartByUserId({where : {id:userId}});
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addToCart(req, res) {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    try {
      const cart = await CartService.addToCart(userId, productId, quantity);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async removeFromCart(req, res) {
    const { userId, productId } = req.params;
    try {
      const cart = await CartService.removeFromCart(userId, productId);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCartItemQuantity(req, res) {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
    try {
      const cart = await CartService.updateCartItemQuantity(userId, productId, quantity);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CartController();
