const { User, Team } = require('../models/index');

module.exports = {
  getAllUserEmails: async (req, res) => {
    const { email } = req.query;
    try {
      const userEmail = await User.findOne({ email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getAllTeams: async (req, res) => {
    try {
      const teams = await Team.find();
      if (!teams) {
        return res.status(200).json({ error: 'No teams found' });
      }
      return res.json(teams);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
  createTeam: async (req, res) => {
    const { team, fantasyPoints } = req.body;
    try {
      const newTeam = await new Team({ team, fantasyPoints, user: req.user._id }).save();
      req.user.teams.push(newTeam);
      await req.user.save();
      const teams = await Team.find({ user: req.user._id });
      return res.json(teams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getUserTeams: async (req, res) => {
    try {
      const teams = await Team.find({ user: req.user._id });
      return res.json(teams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteTeam: async (req, res) => {
    const { teamId } = req.params;
    try {
      const teamToDelete = await Team.findById(teamId);
      if (!teamToDelete) {
        return res.status(401).json({ error: 'The with that Id' });
      }
      if (req.user._id.toString() !== teamToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      const deletedTeam = await Team.findByIdAndDelete(teamId);
      // const teams = await Team.find();
      return res.json(deletedTeam);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};
