GameStage.MinionCollections = {

  createFirstMinion: async function() {
    const rat = await EventFunctions.createFirstMinion(Random.from(['male','female','female']));
    await rat.update({ type:'minion' });
  },

  createRatThief: async function() {
    const rat = await CharacterBuilder.buildStandardMinion({ minion:{ species:'scaven' }});
    Flag.set('character.rat-thief',rat.id);
    Flag.set('player.scaven-reputations.the-seductive','Y');
  }

};
