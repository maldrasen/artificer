global.Configuration = {
  exploreFailureEvent: 'explore-failed',

  onStart: async game => {
    CurrentEvent.set('game-start-1');
    Game.updateLocation('courtyard');
  },

  onDebugStart: async game => {
    CurrentEvent.set('debug-create-player');
    Flag.set('map.heart-of-sin','Y');
  },

};
