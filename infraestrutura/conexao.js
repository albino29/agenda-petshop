// const mysql = require('mysql');

// const conexao = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'myke',
//   password: 'petshop',
//   database: 'petshop',
// });

// module.exports = conexao;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'petshop',
  password: 'docker',
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
