const Education = require('../models/education.model');

const createEducation = (req, res) => {
  const institutionName = req.body.institutionName;
  const courseName = req.body.courseName;
  const achievedDegree = req.body.achievedDegree;
  const courseDuration = req.body.courseDuration;
  const activitiesAndSocieties = req.body.activitiesAndSocieties;

  const newEducationEntry = new Education({
    institutionName,
    courseName,
    achievedDegree,
    courseDuration,
    activitiesAndSocieties
  });

  newEducationEntry.save()
    .then(() => res.status(201).json('Education added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getEducations = (req, res) => {
  Education.find()
    .then(educations => res.json(educations))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getEducation = (req, res) => {
  Education.findById(req.params.id)
    .then(education => res.json(education))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateEducation = (req, res) => {
  let updatedEducationEntry = {
    institutionName: req.body.institutionName,
    courseName: req.body.courseName,
    achievedDegree: req.body.achievedDegree,
    courseDuration: req.body.courseDuration,
    activitiesAndSocieties: req.body.activitiesAndSocieties
  };

  Education.findByIdAndUpdate(req.params.id, updatedEducationEntry, { new: true })
    .then(education => res.json(education))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteEducation = (req, res) => {
  Education.findByIdAndDelete(req.params.id)
    .then(() => res.json('Education entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createEducation,
  getEducations,
  getEducation,
  updateEducation,
  deleteEducation
};