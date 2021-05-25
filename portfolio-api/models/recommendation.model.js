const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendationSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  currentDesignation: {
    type: String,
    trim: true,
    required: true
  },
  currentCompany: {
    type: String,
    trim: true,
    required: true
  },
  recommendationsText: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;