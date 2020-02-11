const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

const getUser = function(email) {
  return pool.query(`
  SELECT * FROM users
  WHERE email = $1;
  `, [email])
  .then(res => res.rows[0])
}
exports.getUser = getUser;

const addUser =  function(email, password) {
  return pool.query(`
  INSERT INTO users (email, password)
  VALUES ($1, $2)
  RETURNING *;
  `, [email, password])
  .then(res => res.rows[0])
}
exports.addUser = addUser;
