const router = require('express').Router();
const playerRoutes = require('./playerRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');

router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);
router.use('/player', playerRoutes);

module.exports = router;
