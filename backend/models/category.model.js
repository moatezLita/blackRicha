const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
// const Product = require('./product');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Category.hasMany(Product, { foreignKey: 'categoryId' });
// Product.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Category;
