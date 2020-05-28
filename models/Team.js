const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  Name: {
    type: String,
  },
  playerID: {
    type: Number,
  },
  Position: {
    type: String,
  },
  PhotoUrl: {
    type: String,
  },
  fantasyPoints: {
    type: Number,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Team = model('Team', TeamSchema);

module.exports = Team;
