import { Router } from 'express';
import Admin from '../models/Admin.js';
import JobApplication from '../models/JobApplication.js';
import { requireAdmin, signAdminJWT, err } from '../middleware/auth.js';
import { comparePassword } from '../utils/hash.js';

const r = Router();

// 관리자 로그인 (사전 계정으로 로그인)
r.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  const admin = await Admin.findOne({ email }).select('+passwordHash');
  if (!admin) return res.status(401).json(err('AUTH', 'Invalid credentials'));
  const ok = await comparePassword(password, admin.passwordHash);
  if (!ok) return res.status(401).json(err('AUTH', 'Invalid credentials'));
  const token = signAdminJWT(admin);
  res.json({ token, admin: { _id: admin._id, email: admin.email, name: admin.name } });
});

// 신청서 목록(대기중)
r.get('/applications', requireAdmin, async (req, res) => {
  const { status = 'pending', limit = 20, page = 1 } = req.query;
  const q = status ? { status } : {};
  const docs = await JobApplication.find(q).sort({ createdAt: -1 })
    .limit(Number(limit)).skip((Number(page)-1)*Number(limit));
  res.json({ items: docs, page: Number(page) });
});

export default r;
