const router = require('express').Router();

const {
  createTeam,
  getAllTeams,
  deleteTeam,
  getUserTeams,
} = require('../../../controllers/teamController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(requireAuth, getAllTeams)
  .post(requireAuth, createTeam);

router.route('/user')
  .get(requireAuth, getUserTeams);

router.route('/:teamId')
  .delete(requireAuth, deleteTeam);

module.exports = router;
