// src/routes/public.js
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Public API is working!');
});

router.get('/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

export default router;
