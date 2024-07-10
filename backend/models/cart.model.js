const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
// const User = require('./user');
// const Product = require('./product');

const Cart = sequelize.define('Cart', {
  products: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  quantities: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

// User.hasMany(Cart, { foreignKey: 'userId' });
// Cart.belongsTo(User, { foreignKey: 'userId' });

// Product.hasMany(Cart, { foreignKey: 'productId' });
// Cart.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Cart;
