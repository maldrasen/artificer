EventCollections = {

  addAct_1_1: async function() {
    await AvailableEvent.addAll([
      { code:'morning-4', requires:'game.dayNumber=4' },
      { code:'demo-over', requires:['flag.completed.journal-6','flag.completed.magic-practice-1-4'] }
    ]);
  },

};
