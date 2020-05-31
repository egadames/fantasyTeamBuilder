const playerStats = require('../client/src/Data/Player/playerStats.json');
const playerInfo = require('../client/src/Data/Player/playerInfo.json');

const info = playerInfo.map(({ PlayerID, PhotoUrl }) => ({ PlayerID, PhotoUrl }));

const stats = playerStats.map(
  ({
    PlayerID,
    Name,
    Position,
    Team,
    Rebounds,
    Assists,
    Steals,
    Turnovers,
    BlockedShots,
    Points,
    Games,
  }) => {
    const fantasyPoints = Games === 0 ? 0
      : Math.ceil(
        (Points
          + Rebounds * 1.2
          + Assists * 1.5
          + Steals * 3
          + BlockedShots * 3
          + Turnovers * -1)
          / Games,
      );
    return {
      PlayerID,
      Name,
      Position,
      Team,
      fantasyPoints,
      Games,
    };
  },
);

const mergeById = (a1, a2) => a1.map((itm) => ({
  ...a2.find((item) => item.PlayerID === itm.PlayerID && item),
  ...itm,
}));

const combined = mergeById(stats, info);

const filtered = combined.filter((x) => x.PhotoUrl !== undefined);

module.exports = {
  getPlayerStats: async (req, res) => {
    try {
      return res.json(filtered);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
