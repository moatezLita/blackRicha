const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');
const authenticate = require('../middleware/authenticate');

// Order routes
router.get('/', authenticate ,OrderController.getAllOrders);
router.get('/:id', authenticate, OrderController.getOrderById);
router.post('/', authenticate, OrderController.createOrder);
router.put('/:id', authenticate, OrderController.updateOrder);
router.delete('/:id', authenticate, OrderController.deleteOrder);
router.get('/user/:userId', authenticate, OrderController.getOrdersByUserId);
module.exports = router;
