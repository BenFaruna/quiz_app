const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  answer: { type: String },
  correct: { type: Boolean },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Response', responseSchema);
