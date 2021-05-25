const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workExperienceSchema = new Schema({
  companyName: {
    type: String,
    trim: true,
    required: true
  },
  designationsHold: {
    type: Array,
    trim: true,
    required: true
  },
  designationsDuration: {
    type: Array,
    trim: true,
    required: true
  },
  aboutExperience: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema);

module.exports = WorkExperience;