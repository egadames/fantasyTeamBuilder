const router = require('express').Router();

const { getPlayerStats } = require('../../../controllers/playerController');

router.get('/test', getPlayerStats);

module.exports = router;
