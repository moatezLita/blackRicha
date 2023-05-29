const CartService = require('../services/cart.service');
const { CustomError } = require('../middleware/errorHandler');

class CartController {
  async getAllCarts(req, res, next) {
    try {
      const carts = await CartService.getAllCarts();
      res.json(carts);
    } catch (error) {
      next(new CustomError('Failed to get all carts', 500));
    }
  }

  async getCartByUserId(req, res, next) {
    const { id: userId } = req.query;
    try {
      const cart = await CartService.getCartByUserId({ where: { id: userId } });
      res.json(cart);
    } catch (error) {
      next(new CustomError('Failed to get cart by user ID', 500));
    }
  }

  async addToCart(req, res, next) {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    try {
      const cart = await CartService.addToCart(userId, productId, quantity);
      res.json(cart);
    } catch (error) {
      next(new CustomError('Failed to add to cart', 500));
    }
  }

  async removeFromCart(req, res, next) {
    const { userId, productId } = req.params;
    try {
      const cart = await CartService.removeFromCart(userId, productId);
      res.json(cart);
    } catch (error) {
      next(new CustomError('Failed to remove from cart', 500));
    }
  }

  async updateCartItemQuantity(req, res, next) {
    const { userId, productId } = req.params;
    const { quantity } = req.body;
    try {
      const cart = await CartService.updateCartItemQuantity(userId, productId, quantity);
      res.json(cart);
    } catch (error) {
      next(new CustomError('Failed to update cart item quantity', 500));
    }
  }
}

module.exports = new CartController();
