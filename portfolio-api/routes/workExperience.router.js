/**
 * @Description: Routes for WorkExperience entity
 * @Route: /workExperiences
 * */
const router = require('express').Router();

const {
  createWorkExperience,
  getWorkExperiences,
  getWorkExperience,
  updateWorkExperience,
  deleteWorkExperience
} = require('../controllers/workExperience.controller');

/**
 * @Description: Create an WorkExperience entity
 * @Endpoint: POST /
 * */
router.post('/', createWorkExperience);

/**
 * @Description: Get all WorkExperience entities
 * @Endpoint: GET /
 * */
router.get('/', getWorkExperiences);

/**
 * @Description: Get a single WorkExperience entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getWorkExperience);

/**
 * @Description: Update a single WorkExperience entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateWorkExperience);

/**
 * @Description: Delete a single WorkExperience entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteWorkExperience);

module.exports = router;