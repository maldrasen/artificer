GameStage.build('stage-1-2',{
  location: 'great-hall',
  dayNumber: 12,

  setup: async () => {
    GameStage.FlagCollections.setDefaults();
    GameStage.FlagCollections.setRandomSexuality();
    GameStage.FlagCollections.setAct_1_1();
    GameStage.FlagCollections.setAct_1_2();
    await GameStage.EventCollections.addBetrayalEvents();
    await GameStage.MinionCollections.createFirstMinion();
    await GameStage.MinionCollections.createRatThief();
  },

});
