const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    // allowNull: false,
    // unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    // allowNull: false,
    defaultValue: 'user',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
});

User.prototype.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = User;
