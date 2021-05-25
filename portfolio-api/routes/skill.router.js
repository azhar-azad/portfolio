/**
 * @Description: Routes for Skill entity
 * @Route: /skills
 * */
const router = require('express').Router();

const {
  createSkill,
  getSkills,
  getSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skill.controller');

/**
 * @Description: Create an Skill entity
 * @Endpoint: POST /
 * */
router.post('/', createSkill);

/**
 * @Description: Get all Skill entities
 * @Endpoint: GET /
 * */
router.get('/', getSkills);

/**
 * @Description: Get a single Skill entity by id
 * @Endpoint: GET /id
 * */
router.get('/:id', getSkill);

/**
 * @Description: Update a single Skill entity by id
 * @Endpoint: PUT /id
 * */
router.put('/:id',updateSkill);

/**
 * @Description: Delete a single Skill entity by id
 * @Endpoint: DELETE /id
 * */
router.delete('/:id',deleteSkill);

module.exports = router;