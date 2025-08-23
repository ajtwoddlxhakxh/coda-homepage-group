// src/models/AdminPool.js
import mongoose from 'mongoose';

const AdminPoolSchema = new mongoose.Schema(
  {
    presetLogin: { type: String, required: true, unique: true, index: true },
    presetPasswordHash: { type: String, required: true },
    label: { type: String },
    isAssigned: { type: Boolean, default: false },
  },
  { timestamps: true, collection: 'adminpools' }
);

export default mongoose.model('AdminPool', AdminPoolSchema);
