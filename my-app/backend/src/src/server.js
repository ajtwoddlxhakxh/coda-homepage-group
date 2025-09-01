// server.js
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './src/config/swagger.js';

// 라우트들
import authRouter from './src/routes/auth.js';

const app = express();

// 공통 미들웨어
app.use(cors());
app.use(express.json());

// 헬스체크
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, ts: new Date().toISOString() });
});

/**
 * 3) Swagger UI 마운트
 * - http://localhost:4000/docs 에서 문서 UI 확인
 * - swaggerSpec은 위에서 swagger-jsdoc로 생성한 OpenAPI 스펙
 */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 실제 API 라우트
app.use('/auth', authRouter);

// 서버 시작
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
  console.log(`[docs]   Swagger UI: http://localhost:${PORT}/docs`);
});
