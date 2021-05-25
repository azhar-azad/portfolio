/**
 * @Description: Routes for Recommendation entity
 * @Route: /recommendations
 * */
const router = require('express').Router();

const {
  createRecommendation,
  getRecommendations,
  getRecommendation,
  updateRecommendation,
  deleteRecommendation
} = require('../controllers/recommendation.controller');

/**
 * @Description: Create an Recommendation entity
 * @Endpoint: POST /
 * */
router.post('/', createRecommendation);

/**
 * @Description: Get all Recommendation entities
 * @Endpoint: GET /
 * */
router.get('/', getRecommendations);

/**
 * @Description: Get a single Recommendation entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getRecommendation);

/**
 * @Description: Update a single Recommendation entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateRecommendation);

/**
 * @Description: Delete a single Recommendation entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteRecommendation);

module.exports = router;