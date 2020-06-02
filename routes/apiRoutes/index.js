const router = require('express').Router();
const playerRoutes = require('./playerRoutes');
const authRoutes = require('./authRoutes');
const teamRoutes = require('./teamRoutes');
const { getAllUserEmails } = require('../../controllers/teamController');

router.use('/auth', authRoutes);
router.use('/user/emails', getAllUserEmails);
router.use('/player', playerRoutes);
router.use('/team', teamRoutes);

module.exports = router;
