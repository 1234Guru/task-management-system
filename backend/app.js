import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts.js';

const app = express();
app.use(cors());          // allow Angular dev‑server
app.use(express.json());  // parse JSON bodies

app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✓ API ready on http://localhost:${PORT}`));