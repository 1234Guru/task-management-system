// backend/src/config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:     process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,  // Number of parallel connections in the pool
  queueLimit: 0         // Unlimited queueing
});


// Optional: test the connection once at server start
db.getConnection((err, connection) => {
  if (err) { 
    console.error('❌ MySQL connection failed:', err.message);
    process.exit(1);
  } else {
    console.log('✅ Connected to MySQL successfully');
    connection.release(); // release immediately after check
  }
});

module.exports = db;
