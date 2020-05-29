const { Team } = require('../models/index');

module.exports = {
  createTeam: async (req, res) => {
    // const { PlayerID, Name, Position, PhotoUrl, fantasyPoints } = req.body;
    try {
      // See if a user with the given email exists
      // const existingTeam = await User.findOne({ email });
      // if (existingUser) { return res.status(403).json({ error: 'User already exists' }); }
      const newteam = await new Team({ team: req.body }).save();
      // Eventually we will send a token
      // return res.json({ token: tokenForUser(user) });

      // const newTodo = await new Todo({ text, user: req.user._id }).save();
      // req.user.todos.push(newTodo);
      // await req.user.save();
      return res.status(200).json(newteam);
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
  deleteTeam: async (req, res) => {
    // grab todoId from req.params
    const { teamId } = req.params;
    try {
      const teamToDelete = await Team.findById(teamId);
      if (!teamToDelete) {
        return res.status(401).json({ error: 'The team with that Id' });
      }
      // Check if the todo does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      // if (req.user._id.toString() !== teamToDelete.user.toString()) {
      //   return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      // // }
      const deletedTeam = await Team.findByIdAndDelete(teamId);
      // // Respond back with the deleted todo
      return res.json(deletedTeam);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
