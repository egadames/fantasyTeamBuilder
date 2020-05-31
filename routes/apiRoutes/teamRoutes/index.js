const router = require('express').Router();

const { createTeam, getAllTeams, deleteTeam } = require('../../../controllers/teamController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');


router.route('/')
  .get(requireAuth, getAllTeams)
  .post(requireAuth, createTeam);

router.route('/:teamId')
  .delete(requireAuth, deleteTeam);

module.exports = router;
