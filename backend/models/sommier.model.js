// Sommier.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Product = require('./product.model');
const category = require ('./category.model');


const Sommier = sequelize.define('Sommier', {
  
  size: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
});
Product.hasMany(Sommier);
Sommier.belongsTo(Product);

Category.hasMany(Sommier);
Sommier.belongsTo(Category);

module.exports = Sommier;