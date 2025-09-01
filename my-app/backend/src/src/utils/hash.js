import * as bcrypt from 'bcryptjs';
export async function hashPassword(pw) {
  return bcrypt.hash(pw, 10);
}