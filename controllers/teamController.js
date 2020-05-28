const { Team } = require('../models/index');

module.exports = {
  createTeam: async (req, res) => {
    const { PlayerID, Name, Position, PhotoUrl, fantasyPoints } = req.body;
    try {
      // See if a user with the given email exists
      // const existingTeam = await User.findOne({ email });
      // if (existingUser) { return res.status(403).json({ error: 'User already exists' }); }
      const team = await new Team({ PlayerID, Name, Position, PhotoUrl, fantasyPoints }).save();
      // Eventually we will send a token
      // return res.json({ token: tokenForUser(user) });

      // const newTodo = await new Todo({ text, user: req.user._id }).save();
      // req.user.todos.push(newTodo);
      // await req.user.save();
      return res.status(200).json(team);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
    getTeams: async (req, res) => {
      try {
        return res.json(filtered);
      } catch (error) {
        return res.status(403).json({ error });
      }

  // signIn: (req, res) => res.json({ token: tokenForUser(req.user) }),
};
