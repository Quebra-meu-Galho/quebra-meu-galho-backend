const config = require ('../knexfile.js');
const knex = require ('knex')(config); //puxando o knex junto com a configuração

module.exports = knex;