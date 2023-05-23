const Cart = require('../models/cart.model');

class CartService {
  async getAllCarts() {
    try {
      const carts = await Cart.findAll();
      return carts;
    } catch (error) {
      throw new Error('Failed to get all carts');
    }
  }

  async getCartByUserId(userId) {
    try {
      const cart = await Cart.findOne({ user: userId }).populate('products.product');
      return cart;
    } catch (error) {
      throw new Error('Failed to get cart by user ID');
    }
  }

  async addToCart(userId, productId, quantity) {
    try {
      let cart = await Cart.findOne({ user: userId });

      if (!cart) {
        // Create a new cart if it doesn't exist for the user
        cart = await Cart.build({ user: userId, products: [] });
        await cart.save();
      }

      const productExists = cart.products.find((item) => item.product.toString() === productId);

      if (productExists) {
        // Update the quantity of an existing product in the cart
        productExists.quantity += quantity;
      } else {
        // Add a new product to the cart
        cart.products.push({ product: productId, quantity });
      }

      await cart.save();
      return cart;
    } catch (error) {
      throw new Error('Failed to add to cart');
    }
  }

  async removeFromCart(userId, productId) {
    try {
      const cart = await Cart.findOne({ user: userId });

      if (!cart) {
        throw new Error('Cart not found');
      }

      // Remove the product from the cart
      cart.products = cart.products.filter((item) => item.product.toString() !== productId);
      
      await cart.save();
      return cart;
    } catch (error) {
      throw new Error('Failed to remove from cart');
    }
  }

  async updateCartItemQuantity(userId, productId, quantity) {
    try {
      const cart = await Cart.findOne({ user: userId });

      if (!cart) {
        throw new Error('Cart not found');
      }

      const product = cart.products.find((item) => item.product.toString() === productId);

      if (!product) {
        throw new Error('Product not found in cart');
      }

      // Update the quantity of the product in the cart
      product.quantity = quantity;

      await cart.save();
      return cart;
    } catch (error) {
      throw new Error('Failed to update cart item quantity');
    }
  }
}

module.exports = new CartService();
