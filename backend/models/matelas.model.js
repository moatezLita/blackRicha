// matelas.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Product = require('./product.model');
const category = require ('./category.model');


const Matelas = sequelize.define('Matelas', {
  
  size: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: false,
  },
});
Product.hasMany(Matelas);
Matelas.belongsTo(Product);

Category.hasMany(Matelas);
Matelas.belongsTo(Category);

module.exports = Matelas;
