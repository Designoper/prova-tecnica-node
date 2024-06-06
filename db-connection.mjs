import { Sequelize } from 'sequelize';

const DATABASE = 'prueba';
const USERNAME = 'root';
const PASSWORD = '';
const HOST = 'localhost';
const DIALECT = 'mysql';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT
});

export default sequelize;
