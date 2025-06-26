const express = require("express");
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./src/routes/auth.routes');
const jobRoutes = require('./src/routes/job.routes');
const errorHandler = require("./src/middleware/error.middleware");
const db = require("./src/config/db"); // triggers DB connection

// Load env first
dotenv.config({
  path: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '.env.production')
    : path.resolve(__dirname, '.env')
});

const port = process.env.PORT || 3000;

// ✅ MIDDLEWARE (Important: BEFORE ROUTES)
app.use(cors());
app.use(express.json()); // ✅ Body parser
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

// ✅ GLOBAL ERROR HANDLER
app.use(errorHandler);

// ✅ START SERVER
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} (${process.env.NODE_ENV || 'development'})`);
});
