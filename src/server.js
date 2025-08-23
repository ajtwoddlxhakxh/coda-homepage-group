

import { auth } from './middleware/auth.js';
process.on('unhandledRejection', e => console.error('[unhandledRejection]', e));
process.on('uncaughtException',  e => console.error('[uncaughtException]', e));

console.log('[BOOT] start');

import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use((req,res,next)=>{ console.log('[REQ]', req.method, req.path); next(); });
app.use('/auth', authRouter);
app.post('/auth/login/ping', (req,res)=>res.json({ok:true}));

const PORT = process.env.PORT ?? 4000;
const MONGO_URL = process.env.MONGO_URL ?? 'mongodb://127.0.0.1:27017/jinro';

(async () => {
  try {
    console.log('[BOOT] connecting', MONGO_URL);
    await mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
    console.log('[BOOT] Mongo connected');
    app.listen(PORT, () => console.log(`[BOOT] HTTP listening on http://localhost:${PORT}`));
  } catch (e) {
    console.error('[BOOT] failed:', e);
    // process.exit(1);  // 일단 끄지 말고 에러 보이게 유지
  }
})();


app.get('/me', auth(), (req, res) => {
  res.json({ user: req.user });
});

app.get('/admin/health', auth('admin'), (req, res) => {
  res.json({ ok: true });
});




