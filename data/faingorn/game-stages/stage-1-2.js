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

    // TODO: This will get complex in later stages. Maybe just map equipment to
    // counts and loop through the list. Doesn't really even need to be a
    // promise.
    await CharacterEquipment.create({ code:'sling', condition:100 });
    await CharacterEquipment.create({ code:'basket', condition:100 });
    await CharacterEquipment.create({ code:'basket', condition:100 });
  },

});
