GameStage.EventCollections = {

  addBetrayalEvents: async function() {
    await AvailableEvent.add('starving');
    await AvailableEvent.add('betrayal');
    await AvailableEvent.add('mutiny');
  },

  addAct_1_1: async function() {
    await AvailableEvent.add('morning-4');
  },

};
