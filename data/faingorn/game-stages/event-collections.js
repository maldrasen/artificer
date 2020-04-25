GameStage.EventCollections = {

  addBetrayalEvents: async function() {
    await AvailableEvent.add('starving');
    await AvailableEvent.add('betrayal');
    await AvailableEvent.add('mutiny');
  },

  addAct_1_1: async function() {
    await AvailableEvent.add('start-act-1-1');
    await AvailableEvent.add('day-8-explore');
    await AvailableEvent.add('magic-practice-1-1');
    await AvailableEvent.add('magic-practice-1-2');
    await AvailableEvent.add('magic-practice-1-3');
    await AvailableEvent.add('magic-practice-1-4');
    await AvailableEvent.add('unlock-resting');
    await AvailableEvent.add('trigger-act-1-2')
  },

};
