require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

async function checkDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkDatabaseConnection();

module.exports = sequelize;
