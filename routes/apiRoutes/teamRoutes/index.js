const router = require('express').Router();

const { createTeam, getAllTeams } = require('../../../controllers/teamController');

router.get('/', getAllTeams);
router.post('/', createTeam);


module.exports = router;
