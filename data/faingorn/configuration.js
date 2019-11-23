global.Configuration = {
  exploreFailureEvent: 'explore-failed',
  gameStartLocation: 'courtyard',
  metric: false,

  // Function called when a new game is created. This could be overwritten by
  // another mod to set up a completely different scenario.
  onStart: async game => {
    await EventQueue.enqueueEvents([]);
    await Flag.setAll({
      'location.keepName': 'Faingorn Keep',
    });

    let startingCharacters = [
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
    ];

    await Promise.all(startingCharacters.map((options) => {
      return CharacterBuilder.build(options);
    }));
  }

};
