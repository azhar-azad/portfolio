const Bio = require('../models/bio.model');

const createBio = (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const email = req.body.email;
  const bioText = req.body.bioText;

  const newBioEntry = new Bio({
    name,
    address,
    email,
    bioText
  });

  newBioEntry.save()
    .then(() => res.status(201).json('Bio added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getBios = (req, res) => {
  Bio.find()
    .then(bios => res.json(bios))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getBio = (req, res) => {
  Bio.findById(req.params.id)
    .then(bio => res.json(bio))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateBio = (req, res) => {
  let updatedBioEntry = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    bioText: req.body.bioText
  };

  Bio.findByIdAndUpdate(req.params.id, updatedBioEntry, { new: true })
    .then(bio => res.json(bio))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteBio = (req, res) => {
  Bio.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bio entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createBio,
  getBios,
  getBio,
  updateBio,
  deleteBio
};