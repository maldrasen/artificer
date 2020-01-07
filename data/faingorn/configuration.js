global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  gameStartLocation: 'heart-of-sin',

  // Function called when a new game is created. This could be overwritten by
  // another mod to set up a completely different scenario.
  onStart: async game => {
    await Flag.setAll({
      'location.keepName': 'Faingorn Keep',
    });

    if (Environment.Debug) {
      await game.update({ location:'heart-of-sin' });
      return await EventQueue.enqueueEvents([
        { code:'debug-create-player' },
      ]);
    }

    await game.update({ location:'courtyard' });
    await EventQueue.enqueueEvents([
      { code:'game-start' },
      { code:'game-start-chase' },
      { code:'courtyard-get-minions' },
    ]);
  }

};
