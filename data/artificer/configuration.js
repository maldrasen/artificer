global.Configuration = {
  metric: false,
  gameStartLocation: 'courtyard',
  gameStartEvents: [
    { type:'gameEvent', code:'game-start' },
    { type:'gameEvent', code:'game-start-chase' },
    { type:'locationEvent', code:'courtyard-get-minions' },
  ],
  gameStartFlags: {
    'locationMenu.map': 'locked',
    'locationMenu.minions': 'locked',
  },
};
