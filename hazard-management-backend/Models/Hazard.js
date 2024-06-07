const mongoose = require('mongoose');

const HazardSchema = new mongoose.Schema({
  description: { type: String, required: true },
  risk: { type: String, required: true },
  control: { type: String, required: true },
  organisation: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Hazard', HazardSchema);
