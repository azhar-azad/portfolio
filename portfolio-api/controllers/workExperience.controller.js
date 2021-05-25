const WorkExperience = require('../models/workExperience.model');

const createWorkExperience = (req, res) => {
  const companyName = req.body.companyName;
  const designationsHold = req.body.designationsHold;
  const designationsDuration = req.body.designationsDuration;
  const aboutExperience = req.body.aboutExperience;

  const newWorkExperienceEntry = new WorkExperience({
    companyName,
    designationsHold,
    designationsDuration,
    aboutExperience
  });

  newWorkExperienceEntry.save()
    .then(() => res.status(201).json('WorkExperience added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getWorkExperiences = (req, res) => {
  WorkExperience.find()
    .then(workExperiences => res.json(workExperiences))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getWorkExperience = (req, res) => {
  WorkExperience.findById(req.params.id)
    .then(workExperience => res.json(workExperience))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateWorkExperience = (req, res) => {
  let updatedWorkExperienceEntry = {
    companyName: req.body.companyName,
    designationsHold: req.body.designationsHold,
    designationsDuration: req.body.designationsDuration,
    aboutExperience: req.body.aboutExperience
  };

  WorkExperience.findByIdAndUpdate(req.params.id, updatedWorkExperienceEntry, { new: true })
    .then(workExperience => res.json(workExperience))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteWorkExperience = (req, res) => {
  WorkExperience.findByIdAndDelete(req.params.id)
    .then(() => res.json('WorkExperience entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createWorkExperience,
  getWorkExperiences,
  getWorkExperience,
  updateWorkExperience,
  deleteWorkExperience
};