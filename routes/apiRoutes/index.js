const router = require('express').Router();
const playerRoutes = require('./playerRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');
const teamRoutes = require('./teamRoutes');


router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);
router.use('/player', playerRoutes);
router.use('/team', teamRoutes);

module.exports = router;
