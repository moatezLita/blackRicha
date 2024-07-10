const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const User = require('./user.model');
const Product = require('./product.model');
const Category = require('./category.model');
const Cart = require('./cart.model');
const Order = require('./order.model');

// Define associations
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

const initModels = async () => {
  try {
    await sequelize.sync({ force: true }); // `force: true` will drop the tables if they already exist
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error creating database & tables:', error);
  }
};

initModels();

module.exports = {
  sequelize,
  User,
  Product,
  Category,
  Cart,
  Order,
};
