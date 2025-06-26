const path = require('path');
const dotenv = require('dotenv');
const express = require('express'); // Only once
const cors = require('cors'); // Only once

// Load .env files (do this first)
dotenv.config({
    path: process.env.NODE_ENV === 'production'
        ? path.resolve(__dirname, '.env.production')
        : path.resolve(__dirname, '.env')
});

const app = express(); // Initialize Express app once
const port = process.env.PORT || 3000;

const authRoutes = require('./src/routes/auth.routes');
const jobRoutes = require('./src/routes/job.routes');
const errorHandler = require('./src/middleware/error.middleware');
const db = require("./src/config/db"); // ✅ Import the db file to trigger connection

// Log loaded ENV variables for debugging
// Middleware
app.use(cors()); // Allow all origins for development
app.use(express.json()); // For parsing application/json

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// Error handling middleware (should be last)
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port} (${process.env.NODE_ENV || 'development'})`);
});

// If you intend to export the app for testing or other uses (e.g., serverless),
// place this AFTER all middleware and route definitions, but usually NOT if you also call app.listen in the same file.
// If you do both, make sure 'app' is the fully configured instance.
// module.exports = app; // Usually only if you separate server start logic