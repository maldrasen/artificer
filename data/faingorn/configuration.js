global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  startingFood: 25,

  onStart: async () => {
    CurrentEvent.set('game-start-1');
    Game.setLocation('courtyard');
  },

  onDebugStart: async () => {
    CurrentEvent.set('debug-create-player');
    Flag.set('map.heart-of-sin','Y');
  },

};
