import { Router } from 'express';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AdminPool from '../models/AdminPool.js';

const router = Router();

router.post('/login', async (req, res) => {
  const t0 = Date.now();
  const mark = (s)=>console.log(`[LOGIN ${Date.now()-t0}ms] ${s}`);

  try {
    mark('start');                       // 0ms
    const { presetLogin, password } = req.body ?? {};
    mark('body parsed');                 // ~1ms

    const admin = await AdminPool.findOne({ presetLogin }).lean();
    mark('db ok');                       // << 여기서 안 찍히면 DB 대기

    if (!admin?.presetPasswordHash) {
      mark('no admin/hash');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const ok = await bcrypt.compare(password, admin.presetPasswordHash);
    mark('bcrypt ok');                   // << 여기서 멈추면 비교 대기

    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET missing');
    const token = jwt.sign(
      { sub: String(admin._id), role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    mark('sign done');

    return res.json({ token });         // 반드시 return
  } catch (e) {
    console.error('Login error:', e);
    return res.status(500).json({ error: 'Server error', message: e.message });
  }
});


export default router;                       // default export 필수

