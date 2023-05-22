// models/order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const User = require('./user.model');
const Product = require('./product.model');

const Order = sequelize.define('Order', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Order);
Order.belongsTo(Product);

module.exports = Order;
