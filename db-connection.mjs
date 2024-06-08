import Sequelize from 'sequelize';

const DATABASE = 'prueba';
const USERNAME = 'root';
const PASSWORD = '';
const HOST = 'localhost';
const DIALECT = 'mysql';

const connection = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT
});

connection.sync()
  .then(() => console.log('Sincronización exitosa'))
  .catch((error) => console.log('Error:', error));

export default connection;
