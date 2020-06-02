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
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },

});

const Team = model('Team', TeamSchema);

module.exports = Team;
