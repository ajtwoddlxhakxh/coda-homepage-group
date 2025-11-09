import jwt from 'jsonwebtoken';

export function requireAdmin(req, res, next) {
  try {
    const h = req.headers.authorization || '';
    const token = h.startsWith('Bearer ') ? h.slice(7) : null;
    if (!token) return res.status(401).json(err('UNAUTHORIZED', 'Missing token'));
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'admin') return res.status(403).json(err('FORBIDDEN', 'Admins only'));
    req.adminId = payload.sub;
    next();
  } catch {
    return res.status(401).json(err('UNAUTHORIZED', 'Invalid token'));
  }
}

export function signAdminJWT(admin) {
  return jwt.sign(
    { sub: String(admin._id), role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES || '7d' }
  );
}

export const err = (code, message, details) => ({ error: { code, message, details } });
