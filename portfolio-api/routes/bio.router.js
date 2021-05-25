/**
 * @Description: Routes for Bio entity
 * @Route: /bios
 * */
const router = require('express').Router();

const {
  createBio,
  getBios,
  getBio,
  updateBio,
  deleteBio
} = require('../controllers/bio.controller');

/**
 * @Description: Create an Bio entity
 * @Endpoint: POST /
 * */
router.post('/', createBio);

/**
 * @Description: Get all Bio entities
 * @Endpoint: GET /
 * */
router.get('/', getBios);

/**
 * @Description: Get a single Bio entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getBio);

/**
 * @Description: Update a single Bio entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateBio);

/**
 * @Description: Delete a single Bio entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteBio);

module.exports = router;