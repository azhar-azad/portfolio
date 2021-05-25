const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  bioText: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const Bio = mongoose.model('Bio', bioSchema);

module.exports = Bio;