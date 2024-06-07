const mongoose = require('mongoose');

const ControlSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  organisation: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Control', ControlSchema);
