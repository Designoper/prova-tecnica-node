const { Sequelize } = require('sequelize');

const DATABASE = 'prueba';
const USERNAME = 'root';
const PASSWORD = '';

// Configura Sequelize
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
