import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  // 최종 로그인 아이디 (이메일 또는 별도 loginId)
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true, maxlength: 50 },
  passwordHash: { type: String, required: true, select: false },
  isActive: { type: Boolean, default: true },

  // 사전 계정 풀에서 배정되었는지 추적
  poolAccountId: { type: mongoose.Types.ObjectId, ref: 'AdminPool' }
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);
