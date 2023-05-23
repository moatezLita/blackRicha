const Order = require('../models/order.model');

class OrderService {
  async getAllOrders() {
    try {
      const orders = await Order.findAll();
      return orders;
    } catch (error) {
      throw new Error('Failed to get orders');
    }
  }

  async getOrderById(orderId) {
    try {
      const order = await Order.findOne(orderId);
      return order;
    } catch (error) {
      throw new Error('Failed to get order by ID');
    }
  }

  async createOrder(orderData) {
    try {
      const order = await Order.create(orderData);
      return order;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  async updateOrder(orderId, orderData) {
    try {
      const order = await Order.findByIdAndUpdate(orderId, orderData, { new: true });
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    } catch (error) {
      throw new Error('Failed to update order');
    }
  }

  async deleteOrder(orderId) {
    try {
      const order = await Order.findByIdAndDelete(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      return 'Order deleted successfully';
    } catch (error) {
      throw new Error('Failed to delete order');
    }
  }
}

module.exports = new OrderService();
