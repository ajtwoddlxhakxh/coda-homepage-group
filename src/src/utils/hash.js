import crypto from 'crypto';
import bcrypt from 'bcryptjs';

export const hashPassword = (raw) => bcrypt.hash(raw, 10);
export const comparePassword = (raw, hash) => bcrypt.compare(raw, hash);

// 랜덤 토큰(필요 시)
export const randomToken = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
