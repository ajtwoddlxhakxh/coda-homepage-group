import dotenv from "dotenv";
dotenv.config();

import { connectDB, disconnectDB } from "../src/db.js";
import AdminPool from "../src/models/AdminPool.js";
import bcrypt from "bcryptjs";

const hashPassword = (raw) => bcrypt.hash(raw, 10);

const rows = [
  { presetLogin: "adminA@club.com", rawPassword: "Fixed#A1234", label: "운영1-A" },
  { presetLogin: "adminB@club.com", rawPassword: "Fixed#B1234", label: "운영1-B" },
  { presetLogin: "adminC@club.com", rawPassword: "Fixed#C1234", label: "운영1-C" },
];

async function run() {
  await connectDB(process.env.MONGO_URI);

  for (const r of rows) {
    await AdminPool.updateOne(
      { presetLogin: r.presetLogin },
      {
        presetLogin: r.presetLogin,
        presetPasswordHash: await hashPassword(r.rawPassword),
        label: r.label,
      },
      { upsert: true }
    );
    console.log(`✓ seeded ${r.presetLogin}`);
  }

  await disconnectDB();
  console.log("done");
  process.exit(0);
}

run().catch((e) => {
  console.error("seed error:", e);
  process.exit(1);
});
