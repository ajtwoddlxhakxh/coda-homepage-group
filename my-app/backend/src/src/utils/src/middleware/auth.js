// src/middleware/auth.js
import jwt from 'jsonwebtoken';

/**
 * Authorization: Bearer <token> 헤더를 검증하고
 * req.user 에 payload를 넣어주는 미들웨어
 */
export function verifyJWT(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }

    const secret = process.env.JWT_SECRET || 'dev-secret';
    const payload = jwt.verify(token, secret); // { sub, role, ... }

    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// 혹시 모를 import 스타일 혼선을 막기 위해 명시적으로 내보내기
export default verifyJWT; // 선택 사항: default도 같이 내보냄 (충돌X)

