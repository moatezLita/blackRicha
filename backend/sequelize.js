require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

// async function checkDatabaseConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// checkDatabaseConnection();

module.exports = sequelize;
