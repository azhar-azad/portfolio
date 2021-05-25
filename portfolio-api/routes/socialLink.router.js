/**
 * @Description: Routes for SocialLink entity
 * @Route: /socialLinks
 * */
const router = require('express').Router();

const {
  createSocialLink,
  getSocialLinks,
  getSocialLink,
  updateSocialLink,
  deleteSocialLink
} = require('../controllers/socialLink.controller');

/**
 * @Description: Create an SocialLink entity
 * @Endpoint: POST /
 * */
router.post('/', createSocialLink);

/**
 * @Description: Get all SocialLink entities
 * @Endpoint: GET /
 * */
router.get('/', getSocialLinks);

/**
 * @Description: Get a single SocialLink entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getSocialLink);

/**
 * @Description: Update a single SocialLink entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateSocialLink);

/**
 * @Description: Delete a single SocialLink entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteSocialLink);

module.exports = router;