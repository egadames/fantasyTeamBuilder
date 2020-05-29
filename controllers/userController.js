const { User, Team } = require('../models/index');

module.exports = {
  getAllUserEmails: async (req, res) => {
    // console.log(req.query);
    const { email } = req.query;
    try {
      const userEmail = await User.findOne({ email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addTeam: async (req, res) => {
    const { team, fantasyPoints } = req.body;
    if (!team) {
      return res.status(400).json({ error: 'You must provide a team' });
    }
    try {
      const newTeam = await new Team({ team, fantasyPoints, user: req.user._id }).save();
      // CHECK WITH MANNY
      req.user.teams.push(newTeam);
      await req.user.save();
      //
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
    // grab todoId from req.params
    const { teamId } = req.params;
    try {
      // First find the team by Id
      const teamToDelete = await Team.findById(teamId);
      if (!teamToDelete) {
        return res.status(401).json({ error: 'The team with that Id' });
      }
      // Check if the team does not belong to the user.
      // if it doesnt, do not allow the user to delete it
      if (req.user._id.toString() !== teamToDelete.user.toString()) {
        return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      }
      //  otherwise, delete the team
      await Team.findByIdAndDelete(teamId);
      // Respond back with the all teams
      const teams = await Team.find();
      return res.json(teams);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  // updateTodoById: async (req, res) => {
  // //   Grab todoId from params
  //   const { todoId } = req.params;
  //   //  grab text and completed from the database
  //   const { text, completed } = req.body;
  //   try {
  //     const todoToUpdate = await Todo.findById(todoId);
  //     if (!todoToUpdate) {
  //       return res.status(401).json({ error: 'No todo with that Id'});
  //     }
  //     if (req.user._id.toString() !== todoToUpdate.user.toString()) {
  //       return res.status(401).json({ error: "You cannot update a todo that's not yours" });
  //     }
  //     const updatedTodo = await Todo.findByIdAndUpdate(todoId,
  //       { completed, text },
  //       { new: true });
  //     return res.json(updatedTodo);
  //   } catch (e) {
  //     return res.status(403).json({ e });
  //   }
  // },
};
