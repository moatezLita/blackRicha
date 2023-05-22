// models/cart.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const User = require('./user.model');
const Product = require('./product.model');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.hasMany(Cart);
Cart.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);

module.exports = Cart;
