const router = require('express').Router();
const {
  getUserTeams,
  deleteTeam,
  // updateTodoById,
  getAllUserEmails,
  addTeam,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);

// /api/user/teams
router.route('/teams')
  .get(requireAuth, getUserTeams)
  .post(requireAuth, addTeam);

// /api/user/teams/
router.route('/teams/:teamId')
  .delete(requireAuth, deleteTeam);
// .put(requireAuth, updateTodoById);

module.exports = router;
