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
    console.log("BACK HIT")
    const { team, fantasyPoints } = req.body;
    // if (!team) {
    //   return res.status(400).json({ error: 'You must provide a team' });
    // }
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
    console.log('IM HIT')
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
      // if (!teamToDelete) {
      //   console.log(!teamToDelete)
      //   return res.status(401).json({ error: 'The with that Id' });
      // }
      // if (req.user._id.toString() !== teamToDelete.user.toString()) {
      //   return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
      // }
      await Team.findByIdAndDelete(teamId);
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


// module.exports = {
//   createTeam: async (req, res) => {
//     const { team, points } = req.body;
//     try {
//       // See if a user with the given email exists
//       // const existingTeam = await User.findOne({ email });
//       // if (existingUser) { return res.status(403).json({ error: 'User already exists' }); }
//       const newTeam = await new Team({ team, points }).save();
//       // const teams = await Team.find();
//       // teams.push(newTeam)
//       // console.log(req);
//       // req.user.todos.push(newTodo);
//       // await req.user.save();
//       // const user = await User.findById(userId)
//       // console.log(user)
//       // Eventually we will send a token
//       // return res.json({ token: tokenForUser(user) });

//       // req.user.todos.push(newTodo);
//       // await req.user.save();
//       const teams = await Team.find();

//       return res.status(200).json(teams);
//     } catch (e) {
//       return res.status(403).json({ e });
//     }
//   },
//   getAllTeams: async (req, res) => {
//     try {
//       const teams = await Team.find();
//       if (!teams) {
//         return res.status(200).json({ error: 'No teams found' });
//       }
//       return res.json(teams);
//     } catch (error) {
//       return res.status(403).json({ error });
//     }
//   },
//   deleteTeam: async (req, res) => {
//     // grab todoId from req.params
//     const { teamId } = req.params;
//     try {
//       const teamToDelete = await Team.findById(teamId);
//       if (!teamToDelete) {
//         return res.status(401).json({ error: 'The team with that Id' });
//       }
//       // Check if the todo does not belong to the user.
//       // if it doesnt, do not allow the user to delete it
//       // if (req.user._id.toString() !== teamToDelete.user.toString()) {
//       //   return res.status(401).json({ error: "You cannot delete a todo that's not yours" });
//       // // }
//       await Team.findByIdAndDelete(teamId);
//       // // Respond back with the deleted team
//       const teams = await Team.find();
//       return res.json(teams);
//     } catch (error) {
//       return res.status(403).json({ error });
//     }
//   },
// };
