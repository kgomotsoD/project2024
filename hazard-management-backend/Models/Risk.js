const mongoose = require('mongoose');

const RiskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  organisation: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Risk', RiskSchema);
