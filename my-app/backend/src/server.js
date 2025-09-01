// src/server.js
import 'dotenv/config';        // ← 한 줄로 끝 (dotenv.config 대체)
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

// 헬스체크
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
});

async function start() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI not set');

    // 연결 옵션: 선택적이지만 진단에 도움
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,  // 5초 내 미연결이면 바로 에러
      // bufferCommands: false,        // 원인 빨리 드러내고 싶으면 주석 해제
    });

    console.log('[DB] connected:', uri);

    // ✅ DB 연결된 뒤에 라우터 마운트
    app.use('/auth', authRouter);

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`[HTTP] Listening on ${PORT}`));
  } catch (err) {
    console.error('[Fatal] DB connect failed:', err);
    process.exit(1);
  }
}

start();


