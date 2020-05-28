const router = require('express').Router();

const { createTeam } = require('../../../controllers/teamController');

router.post('/', createTeam);

module.exports = router;
