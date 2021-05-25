const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skillType: {
    type: String,
    trim: true,
    required: true
  },
  skillTechs: {
    type: Array,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;