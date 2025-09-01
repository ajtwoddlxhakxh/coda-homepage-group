import mongoose from 'mongoose';

const jobAppSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true },
  name: { type: String, required: true },
  phone: String,
  purpose: { type: String, required: true, maxlength: 2000 },
  department: String,
  studentId: String,
  portfolioUrl: String,
  comment: String,

  status: { type: String, enum: ['pending','approved','rejected'], default: 'pending', index: true },
  review: {
    reviewerId: { type: mongoose.Types.ObjectId, ref: 'Admin' },
    note: String,
    decidedAt: Date
  }
}, { timestamps: true });

export default mongoose.model('JobApplication', jobAppSchema);
