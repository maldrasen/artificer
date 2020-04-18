global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  gameStartLocation: 'heart-of-sin',

  // Function called when a new game is created. This could be overwritten by
  // another mod to set up a completely different scenario.
  onStart: async game => {
    await game.update({ location:'courtyard' });
    EventQueue.add('game-start-1');
  },

  onDebugStart: async game => {
    EventQueue.add('debug-create-player');
    Flag.setAll({
      'map.heart-of-sin': 'Y'
    });
  },

};
