const { User, Team } = require('../models/index');

module.exports = {
  createTeam: async (req, res) => {
    const { team, points } = req.body;
    try {
      // See if a user with the given email exists
      // const existingTeam = await User.findOne({ email });
      // if (existingUser) { return res.status(403).json({ error: 'User already exists' }); }
      const newTeam = await new Team({ team, points }).save();
      // const teams = await Team.find();
      // teams.push(newTeam)
      // console.log(req);
      // req.user.todos.push(newTodo);
      // await req.user.save();
      // const user = await User.findById(userId)
      // console.log(user)
      // Eventually we will send a token
      // return res.json({ token: tokenForUser(user) });

      // req.user.todos.push(newTodo);
      // await req.user.save();
      const teams = await Team.find();

      return res.status(200).json(teams);
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
      await Team.findByIdAndDelete(teamId);
      // // Respond back with the deleted team
      const teams = await Team.find();
      return res.json(teams);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
