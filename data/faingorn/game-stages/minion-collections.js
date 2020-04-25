GameStage.MinionCollections = {

  createFirstMinion: async function() {
    const rat = await EventFunctions.createFirstMinion(Random.from(['male','female','female']));
    await rat.update({ type:'minion' });
  },

  // Randomly decide the outcome of the rat thief event, with recruiting the
  // thief being the more likely outcome.
  createRatThief: async function() {
    let roll = Random.upTo(5);

    if (roll == 0) { return Flag.set('player.scaven-reputations.the-butcher','Y'); }
    if (roll == 1) { return Flag.set('player.scaven-reputations.the-benevolent','Y'); }

    const rat = await CharacterBuilder.buildStandardMinion({ minion:{ species:'scaven' }});
    Flag.set('character.rat-thief',rat.id);
    Flag.set('player.scaven-reputations.the-seductive','Y');
  }

};
