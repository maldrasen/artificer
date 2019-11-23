global.Configuration = {
  metric: false,
  gameStartLocation: 'courtyard',
  gameStartEvents: [
    { code:'game-start' },
    { code:'game-start-chase' },
    { code:'courtyard-get-minions' },
  ],
  gameStartFlags: {
    'location.hinterlandsName': 'The Hinterlands',
    'location.keepName': 'Faingorn Keep',
  },
  exploreFailureEvent: 'explore-failed',
};
