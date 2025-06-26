const db = require('../config/db');

const createUser = (name, email, hashedPassword, cb) => {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashedPassword], cb);
};

const findUserByEmail = (email, cb) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], cb);
};

module.exports = { createUser, findUserByEmail };
