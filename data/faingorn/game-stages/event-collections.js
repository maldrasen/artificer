GameStage.EventCollections = {

  addBetrayalEvents: async function() {
    await AvailableEvent.addAll([
      { code:'starving',  requires:['game.food=0']},
      { code:'betrayal',  requires:['minions.will-betray','minions.will-not-mutiny']},
      { code:'mutiny',    requires:['minions.will-mutiny']},
    ]);
  },

  addAct_1_1: async function() {
    await AvailableEvent.addAll([
      { code:'morning-4', requires:['game.dayNumber=4']},
    ]);
  },

};
