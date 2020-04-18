global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  gameStartLocation: 'heart-of-sin',

  // Function called when a new game is created. This could be overwritten by
  // another mod to set up a completely different scenario.
  onStart: async game => {
    await game.update({ location:'courtyard' });
    await EventQueue.enqueueEvents([
      { code:'game-start-1' },
      { code:'game-start-2' },
      { code:'morning-1' },
    ]);
  },

  onDebugStart: async game => {
    await EventQueue.enqueueEvent('debug-create-player');
    Flag.setAll({
      'map.heart-of-sin': 'Y'
    });
  },

};
