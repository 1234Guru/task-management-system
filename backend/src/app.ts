// src/app.ts
import express from 'express'; 
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import jobRoutes from './routes/job.routes';
const router = require("./routes/auth.routes")

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

export default app; // 👈 For Supertest
