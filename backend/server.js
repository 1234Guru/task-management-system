const path = require('path');
const dotenv = require('dotenv');
const db = require('./src/config/db'); // ✅ Import the db file to trigger connection

// Load the correct .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '.env.production')
    : path.resolve(__dirname, '.env')
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
console.log('✅ ENV Loaded:', {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
});

// Your usual middleware and routes here
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} (${process.env.NODE_ENV || 'development'})`);
});
