// src/routes/public.js
import { Router } from 'express';
import JobApplication from '../models/application.js';

const router = Router();

// Helper function for error responses
const err = (code, message) => ({ error: code, message });

// Health check endpoints
router.get('/', (req, res) => {
  res.send('Public API is working!');
});

router.get('/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

// Job application submission
router.post('/applications', async (req, res) => {
  try {
    const { email, name, purpose } = req.body || {};
    if (!email || !name || !purpose) {
      return res.status(400).json(err('VALIDATION', 'email, name, purpose required'));
    }
    const doc = await JobApplication.create({ ...req.body });
    return res.status(201).json({ id: doc._id, status: doc.status });
  } catch (e) {
    console.error(e);
    return res.status(500).json(err('INTERNAL', 'unexpected'));
  }
});

export default router;
