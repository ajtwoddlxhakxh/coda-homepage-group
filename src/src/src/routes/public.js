import { Router } from 'express';
import JobApplication from '../models/JobApplication.js';
import { err } from '../middleware/auth.js';

const r = Router();

r.post('/applications', async (req, res) => {
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

export default r;
