import Sequelize from 'sequelize';

const DATABASE = 'prueba';
const USERNAME = 'root';
const PASSWORD = '';
const HOST = 'localhost';
const DIALECT = 'mysql';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT
});

sequelize.sync()
  .then(() => console.log('Sincronización exitosa'))
  .catch((error) => console.log('Error:', error));

export default sequelize;
