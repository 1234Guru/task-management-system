const app = require("express")();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors'); // Only once
const authRoutes = require('./src/routes/auth.routes');
const jobRoutes = require('./src/routes/job.routes');
const errorHandler = require('./src/middleware/error.middleware');
const db = require("./src/config/db"); // ✅ Import the db file to trigger connection
// Load the correct .env file
dotenv.config({
  path: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '.env.production')
    : path.resolve(__dirname, '.env')
});
app.use(cors()); // Allow all origins for development

const port = process.env.PORT || 3000;

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);


// Your usual middleware and routes here
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} (${process.env.NODE_ENV || 'development'})`);
});
