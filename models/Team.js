const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
  team: {
    type: Array,
  },
  // user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Team = model('Team', TeamSchema);

module.exports = Team;
