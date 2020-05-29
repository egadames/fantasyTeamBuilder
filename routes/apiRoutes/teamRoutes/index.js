const router = require('express').Router();

const { createTeam, getAllTeams, deleteTeam } = require('../../../controllers/teamController');

router.get('/', getAllTeams);
router.post('/', createTeam);

router.route('/:teamId')
  .delete(deleteTeam);

module.exports = router;
