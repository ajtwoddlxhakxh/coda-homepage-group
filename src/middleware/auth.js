// src/middleware/auth.js
import jwt from 'jsonwebtoken';

export function auth(requiredRole) {
  return (req, res, next) => {
    try {
      const h = req.headers.authorization || '';
      const token = h.startsWith('Bearer ') ? h.slice(7) : null;
      if (!token) return res.status(401).json({ error: 'No token' });

      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload; // { sub, role }

      if (requiredRole && payload.role !== requiredRole)
        return res.status(403).json({ error: 'Forbidden' });

      next();
    } catch (e) {
      return res.status(401).json({ error: 'Invalid/Expired token' });
    }
  };
}
