GameStage.build('stage-1-1',{
  location: 'great-hall',
  dayNumber: 3,

  setup: async () => {
    GameStage.FlagCollections.setDefaults();
    GameStage.FlagCollections.setRandomSexuality();
    GameStage.FlagCollections.setAct_1_1();
    await GameStage.EventCollections.addBetrayalEvents();
    await GameStage.EventCollections.addAct_1_1();
    await GameStage.MinionCollections.createFirstMinion();
  },

});
