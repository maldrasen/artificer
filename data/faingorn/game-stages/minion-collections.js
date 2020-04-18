GameStage.MinionCollections = {

  createFirstMinion: async function() {
    const rat = await EventFunctions.createFirstMinion(Random.from(['male','female','female']));
    await rat.update({ type:'minion' });
  }

};
