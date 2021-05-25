const SocialLink = require('../models/socialLink.model');

const createSocialLink = (req, res) => {
  const name = req.body.name;
  const link = req.body.link;

  const newSocialLinkEntry = new SocialLink({
    name,
    link
  });

  newSocialLinkEntry.save()
    .then(() => res.status(201).json('SocialLink added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getSocialLinks = (req, res) => {
  SocialLink.find()
    .then(socialLinks => res.json(socialLinks))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getSocialLink = (req, res) => {
  SocialLink.findById(req.params.id)
    .then(socialLink => res.json(socialLink))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateSocialLink = (req, res) => {
  let updatedSocialLinkEntry = {
    name: req.body.name,
    link: req.body.link
  };

  SocialLink.findByIdAndUpdate(req.params.id, updatedSocialLinkEntry, { new: true })
    .then(socialLink => res.json(socialLink))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteSocialLink = (req, res) => {
  SocialLink.findByIdAndDelete(req.params.id)
    .then(() => res.json('SocialLink entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createSocialLink,
  getSocialLinks,
  getSocialLink,
  updateSocialLink,
  deleteSocialLink
};