const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  institutionName: {
    type: String,
    trim: true,
    required: true
  },
  courseName: {
    type: String,
    trim: true
  },
  achievedDegree: {
    type: String,
    trim: true,
    required: true
  },
  courseDuration: {
    type: String,
    trim: true,
    required: true
  },
  activitiesAndSocieties: {
    type: Array,
    trim: true
  }
}, {
  timestamps: true
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;