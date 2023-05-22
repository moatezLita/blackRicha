const express = require('express');
const router = express.Router();
const CartService = require('../services/cart.service');

// Get cart by user ID
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const cart = await CartService.getCartByUserId(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get cart by user ID' });
  }
});

// Add item to cart
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  try {
    const cart = await CartService.addToCart(userId, productId, quantity);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Remove item from cart
router.delete('/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params;
  try {
    const cart = await CartService.removeFromCart(userId, productId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

// Update item quantity in cart
router.put('/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await CartService.updateCartItemQuantity(userId, productId, quantity);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update cart item quantity' });
  }
});

module.exports = router;
