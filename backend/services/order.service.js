const { or } = require('sequelize');
const { use } = require('../app');
const Order = require('../models/order.model');

class OrderService {

  async getOrdersByUserId (userId) {
    try {
      // Fetch orders from the database based on the userId
      const orders = await Order.findAll( userId ); // Assuming your Order model has a 'userId' field
  
      return orders;
    } catch (error) {
      // Handle any errors
      throw new Error('Failed to get orders by userId');
    }
  }
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
      const order =  Order.build(orderData);
      await order.save();
      return order;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  }

  async updateOrder(orderId, orderData) {
    try {
      const order = await Order.findOne(orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      await order.update(orderData, { new: true })
      await order.save();
      return order;
    } catch (error) {
      throw new Error('Failed to update order');
    }
  }

  async deleteOrder(orderId) {
    try {
      const order = await Order.findOne(orderId);
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
