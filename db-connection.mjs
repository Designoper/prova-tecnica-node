import { Sequelize } from 'sequelize';

const DATABASE = 'prueba';
const USERNAME = 'root';
const PASSWORD = '';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
