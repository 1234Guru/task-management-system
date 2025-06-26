const app = require("express")();
const path = require('path');
const dotenv = require('dotenv');
const db = require('./src/config/db'); // ✅ Import the db file to trigger connection
const cors = require('cors'); // Only once

// Load the correct .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '.env.production')
    : path.resolve(__dirname, '.env')
});
app.use(cors()); // Allow all origins for development

const port = process.env.PORT || 3000;


// Your usual middleware and routes here
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} (${process.env.NODE_ENV || 'development'})`);
});
