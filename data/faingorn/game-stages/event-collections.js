GameStage.EventCollections = {

  addBetrayalEvents: async function() {
    await AvailableEvent.add('starving', { requires:['game.food=0']});
    await AvailableEvent.add('betrayal', { requires:['minions.will-betray','minions.will-not-mutiny']});
    await AvailableEvent.add('mutiny',   { requires:['minions.will-mutiny']});
  },

  addAct_1_1: async function() {
    await AvailableEvent.add('morning-4', { requires:['game.dayNumber=4']});
  },

};
