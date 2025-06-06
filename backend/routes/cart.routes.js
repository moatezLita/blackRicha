const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');
const authenticate = require('../middleware/authenticate');


router.get('/', authenticate, CartController.getAllCarts);
router.get('/:userId', CartController.getCartByUserId);
router.post('/:userId', CartController.addToCart);
router.delete('/:userId/:productId', CartController.removeFromCart);
router.put('/:userId/:productId', CartController.updateCartItemQuantity);

module.exports = router;
