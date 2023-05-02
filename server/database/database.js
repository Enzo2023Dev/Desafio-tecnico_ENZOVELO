const { Sequelize } = require('sequelize');

// Conexión a una base de datos
const database = new Sequelize('desafio', 'root', 'Enzo#118', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
});

module.exports = database;