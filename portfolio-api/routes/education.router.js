/**
 * @Description: Routes for Education entity
 * @Route: /educations
 * */
const router = require('express').Router();

const {
  createEducation,
  getEducations,
  getEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/education.controller');

/**
 * @Description: Create an Education entity
 * @Endpoint: POST /
 * */
router.post('/', createEducation);

/**
 * @Description: Get all Education entities
 * @Endpoint: GET /
 * */
router.get('/', getEducations);

/**
 * @Description: Get a single Education entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getEducation);

/**
 * @Description: Update a single Education entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateEducation);

/**
 * @Description: Delete a single Education entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteEducation);

module.exports = router;