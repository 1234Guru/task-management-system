const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./src/routes/auth.routes');
const jobRoutes = require('./src/routes/job.routes');
const errorHandler = require('./src/middleware/error.middleware');
const db = require("./src/config/db")
app.use(cors());
app.use(express.json());
 


// ✅ Register the routes
app.use('/api/auth', authRoutes);     // mounts /register at /api/auth/register
app.use('/api/jobs', jobRoutes);      // example: /api/jobs/all

// ✅ Error handling (optional)
app.use(errorHandler);


module.exports = app;
