Event.build('starving', {
  repeatable: true,

  setting: {
    phase: 'early',
    location: 'great-hall'
  },

  requires: ['game.food=0'],

  stages:[{
    requires: 'flag.minions.count=1',
    pages:[{ text:`My minion and I have run out of food.` }],
  }],

  // This event always adds itself back into the available event queue because this event should always trigger when
  // there is no food. This needs to be added to the next day though because it could trigger both day and night.
  //
  // TODO: The starvation event will be slightly different depending on the state of the keep, what upgrades you have,
  //       how many minions you have, etc. For now though we just enqueue the event for when there is only one minion.
  onFinish: async () => {
    await Character.reduceAllLoyalty(6);
    await AvailableEvent.add('starving', { requires:[`game.dayNumber>${Game.dayNumber()}`]});

    if (Flag.lookup('minions.count') == 1) { return Game.chainEvent('starving-single'); }

    throw `TODO: Need a starvation event that matches the game's current state.`
  },

});