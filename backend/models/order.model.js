const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
// const User = require('./user');
// const Product = require('./product');

const Order = sequelize.define('Order', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalprice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.hasMany(Order, { foreignKey: 'userId' });
// Order.belongsTo(User, { foreignKey: 'userId' });

// Product.hasMany(Order, { foreignKey: 'productId' });
// Order.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Order;
