const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema({
  name: {
    type: String,
  },
  playerId: {
    type: Number,
  },
  team: {
    type: String,
  },
  image: {
    type: String,
  },
  pointPerGame: {
    type: Number,
  },
  reboundPerGame: {
    type: Number,
  },
  assistPerGame: {
    type: Number,
  },
  blockPerGame: {
    type: Number,
  },
  turnoverPerGame: {
    type: Number,
  },
  fantasyPoints: {
    type: Number,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Player = model('Player', PlayerSchema);

module.exports = Player;
