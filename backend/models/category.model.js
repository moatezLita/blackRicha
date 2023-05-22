// models/category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

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

module.exports = Category;
