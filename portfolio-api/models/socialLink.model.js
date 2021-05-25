const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialLinkSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  link: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

module.exports = SocialLink;