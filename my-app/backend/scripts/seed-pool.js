// scripts/seed-pool.js
import 'dotenv/config';
import mongoose from 'mongoose';
import AdminPool from '../src/models/AdminPool.js';
import { hashPassword } from '../src/utils/hash.js'; // ✅ 이렇게!

// (선호하면 db.js 쓰지 말고 여기서 바로 연결)
await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });

const rows = [
  { presetLogin: 'adminA@club.com', rawPassword: 'Fixed#A1234', label: '👩‍💼-A' },
  { presetLogin: 'adminB@club.com', rawPassword: 'Fixed#B1234', label: '👨‍💼-B' },
  { presetLogin: 'adminC@club.com', rawPassword: 'Fixed#C1234', label: '👩‍💻-C' },
  // 테스트 계정 원하면 아래 추가
  // { presetLogin: 'admin1', rawPassword: '1234', label: '테스트' },
];

for (const r of rows) {
  await AdminPool.updateOne(
    { presetLogin: r.presetLogin },
    {
      $set: {
        presetLogin: r.presetLogin,
        presetPasswordHash: await hashPassword(r.rawPassword),
        label: r.label,
      },
    },
    { upsert: true }
  );
  console.log('seeded', r.presetLogin);
}

await mongoose.disconnect();
console.log('done');
process.exit(0);
