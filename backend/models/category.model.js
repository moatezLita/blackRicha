// models/category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Product = require('./product.model');


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

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = Category;
