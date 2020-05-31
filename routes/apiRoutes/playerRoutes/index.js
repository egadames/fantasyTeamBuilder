const router = require('express').Router();

const { getPlayerStats } = require('../../../controllers/playerController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

router.route('/')
  .get(requireAuth, getPlayerStats);

module.exports = router;
