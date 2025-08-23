import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './db.js';

import publicRoutes from './routes/public.js';
import adminRoutes from './routes/admin.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api', publicRoutes);        // /api/applications
app.use('/api/admin', adminRoutes);   // /api/admin/login, /api/admin/applications...

const { MONGO_URI, PORT = 4000 } = process.env;
if (!MONGO_URI) { console.error('MONGO_URI missing'); process.exit(1); }

await connectDB(MONGO_URI);
app.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));
