global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  gameStartLocation: 'heart-of-sin',
  metric: false,

  // Function called when a new game is created. This could be overwritten by
  // another mod to set up a completely different scenario.
  onStart: async game => {
    await EventQueue.enqueueEvents([]);

    await Flag.setAll({
      'location.keepName': 'Faingorn Keep',
    });
  }

};
