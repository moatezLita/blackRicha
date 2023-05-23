const OrderService = require('../services/order.service');

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getOrderById(req, res) {
    const { id : orderId } = req.params;
    try {
      const order = await OrderService.getOrderById({where : {id: orderId}});
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createOrder(req, res) {
    const orderData = req.body;
    try {
      const newOrder = await OrderService.createOrder(orderData);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateOrder(req, res) {
    const { id: orderId } = req.params;
    const orderData = req.body;
    try {
      const updatedOrder = await OrderService.updateOrder({where : {id: orderId}}, orderData);
      if (!updatedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteOrder(req, res) {
    const { id: orderId } = req.params;
    try {
      const result = await OrderService.deleteOrder({where : {id: orderId}});
      if (result === 'Order not found') {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new OrderController();
