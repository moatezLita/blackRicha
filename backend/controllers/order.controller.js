const OrderService = require('../services/order.service');
const { CustomError } = require('../middleware/errorHandler');

class OrderController {

  async getOrdersByUserId(req, res, next) {
    const { userId} = req.params;
    try {
      const order = await OrderService.getOrdersByUserId(userId);
      // if (!order) {
      //   return next(new CustomError('Order not found', 404));
      // }
      res.json(order);
    } catch (error) {
      next(new CustomError('Failed to get order by userID', 500));
    }
  }
  async getAllOrders(req, res, next) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      next(new CustomError('Failed to get all orders', 500));
    }
  }

  async getOrderById(req, res, next) {
    const { id: orderId } = req.params;
    try {
      const order = await OrderService.getOrderById({ where: { id: orderId } });
      // if (!order) {
      //   return next(new CustomError('Order not found', 404));
      // }
      res.json(order);
    } catch (error) {
      next(new CustomError('Failed to get order by ID', 500));
    }
  }

  async createOrder(req, res, next) {
    const orderData = req.body;
    try {
      const newOrder = await OrderService.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      next(new CustomError('Failed to create order', 500));
    }
  }

  async updateOrder(req, res, next) {
    const { id: orderId } = req.params;
    const orderData = req.body;
    try {
      const updatedOrder = await OrderService.updateOrder({ where: { id: orderId } }, orderData);
      // if (!updatedOrder) {
      //   return next(new CustomError('Order not found', 404));
      // }
      res.json(updatedOrder);
    } catch (error) {
      next(new CustomError('Failed to update order', 500));
    }
  }

  async deleteOrder(req, res, next) {
    const { id: orderId } = req.params;
    try {
      const result = await OrderService.deleteOrder({ where: { id: orderId } });
      // if (result === 'Order not found') {
      //   return next(new CustomError('Order not found', 404));
      // }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      next(new CustomError('Failed to delete order', 500));
    }
  }
}

module.exports = new OrderController();
