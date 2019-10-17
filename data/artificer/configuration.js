global.Configuration = {
  metric: false,
  gameStartLocation: 'courtyard',
  gameStartEvents: [
    { type:'gameEvent', code:'game-start' },
    { type:'gameEvent', code:'game-start-chase' },
    { type:'locationEvent', code:'courtyard-get-minions' },
  ],
  gameStartFlags: {
    'location.hinterlandsName': 'The Hinterlands',
    'location.keepName': 'Faingorn Keep',
    'locationMenu.map': 'locked',
    'locationMenu.minions': 'locked',
  },
};
