const Recommendation = require('../models/recommendation.model');

const createRecommendation = (req, res) => {
  const name = req.body.name;
  const currentDesignation = req.body.currentDesignation;
  const currentCompany = req.body.currentCompany;
  const recommendationsText = req.body.recommendationsText;

  const newRecommendationEntry = new Recommendation({
    name,
    currentDesignation,
    currentCompany,
    recommendationsText
  });

  newRecommendationEntry.save()
    .then(() => res.status(201).json('Recommendation added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

const getRecommendations = (req, res) => {
  Recommendation.find()
    .then(recommendations => res.json(recommendations))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const getRecommendation = (req, res) => {
  Recommendation.findById(req.params.id)
    .then(recommendation => res.json(recommendation))
    .catch(err => res.status(500).json(`Error: ${err}`));
};

const updateRecommendation = (req, res) => {
  let updatedRecommendationEntry = {
    name: req.body.name,
    currentDesignation: req.body.currentDesignation,
    currentCompany: req.body.currentCompany,
    recommendationsText: req.body.recommendationsText
  };

  Recommendation.findByIdAndUpdate(req.params.id, updatedRecommendationEntry, { new: true })
    .then(recommendation => res.json(recommendation))
    .catch(err => err.status(400).json(`Error: ${err}`));
};

const deleteRecommendation = (req, res) => {
  Recommendation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recommendation entry deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  createRecommendation,
  getRecommendations,
  getRecommendation,
  updateRecommendation,
  deleteRecommendation
};