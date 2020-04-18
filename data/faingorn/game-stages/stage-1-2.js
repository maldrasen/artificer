GameStage.build('stage-1-2',{
  location: 'great-hall',
  gameDay: 12,

  setup: async game => {
    GameStage.FlagCollections.setDefaults();
    GameStage.FlagCollections.setRandomSexuality();
    GameStage.FlagCollections.setAct_1_1();
    GameStage.FlagCollections.setAct_1_2();
    await GameStage.EventCollections.addBetrayalEvents();
    await GameStage.MinionCollections.createFirstMinion();
  },

});
