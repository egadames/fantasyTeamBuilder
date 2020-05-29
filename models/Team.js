const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  team: {
    type: Array,
  },
  fantasyPoints: {
    type: Number,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  // user: { type: Schema.Types.ObjectId, ref: 'User' },
  // user: { type: Number, ref: 'User' },

});

const Team = model('Team', TeamSchema);

module.exports = Team;
