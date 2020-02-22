EventCollections = {

  addAct_1_1: async function() {
    await AvailableEvent.addAll([
      { code:'demo-over', requires:['flag.completed.journal-6','flag.completed.magic-practice-1-4']},
      { code:'morning-4', requires:['game.dayNumber=4']},
      { code:'starving',  requires:['game.food=0']},
      { code:'betrayal',  requires:['minions.will-betray','minions.will-not-mutiny']},
      { code:'mutiny',    requires:['minions.will-mutiny']},
    ]);
  },

};
