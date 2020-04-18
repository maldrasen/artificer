GameStage.build('stage-1-2',{
  location: 'great-hall',
  gameDay: 3,

  // TODO: Still setting this.

  setup: async game => {
    GameStage.FlagCollections.setDefaults();
    GameStage.FlagCollections.setRandomSexuality();
    GameStage.FlagCollections.setAct_1_1();
    await GameStage.EventCollections.addBetrayalEvents();
    await GameStage.EventCollections.addAct_1_1();
    await GameStage.MinionCollections.createFirstMinion();
  },

});
