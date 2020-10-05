global.Configuration = {
  exploreFailureEvent: 'explore.failed',
  startingFood: 25,

  onStart: async () => {
    Game.addEvent('game-start-1');
    Game.setLocation('courtyard');
  },

  onDebugStart: async () => {
    Game.addEvent('debug-create-player');
    Flag.set('map.heart-of-sin','Y');
  },

};
