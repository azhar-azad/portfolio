const Skill = require('../models/skill.model');

const createSkill = (req, res) => {
  const skillType = req.body.skillType;
  const skillTechs = req.body.skillTechs;

  const newSkillEntry = new Skill({
    skillType,
    skillTechs
  });

  newSkillEntry.save()
    .then(() => res.status(201).json('Skill added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getSkills = (req, res) => {
  Skill.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getSkill = (req, res) => {
  Skill.findById(req.params.id)
    .then(skill => res.json(skill))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateSkill = (req, res) => {
  let updatedSkillEntry = {
    skillType: req.body.skillType,
    skillTechs: req.body.skillTechs
  };

  Skill.findByIdAndUpdate(req.params.id, updatedSkillEntry, { new: true })
    .then(skill => res.json(skill))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteSkill = (req, res) => {
  Skill.findByIdAndDelete(req.params.id)
    .then(() => res.json('Skill entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createSkill,
  getSkills,
  getSkill,
  updateSkill,
  deleteSkill
};