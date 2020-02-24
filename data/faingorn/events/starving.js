Event.build('starving', {
  background:{ location:'great-hall', time:'morning' },
  repeatable: true,

  stages:[{
    requires: 'minions.count=1',
    pages:[{ text:`My minion and I have run out of food.` }],
  }],

  // This event always adds itself back into the available event queue because this event should always trigger when
  // there is no food. This needs to be added to the next day though because it could trigger both day and night.
  //
  // TODO: The starvation event will be slightly different depending on the state of the keep, what upgrades you have,
  //       how many minions you have, etc. For now though we just enqueue the event for when there is only one minion.
  onFinish: async () => {
    const game = await Game.instance();
    const flags = await Flag.getAll();

    await Character.reduceAllLoyalty();
    await AvailableEvent.add({ code:'starving', requires:[`game.dayNumber>${game.dayNumber}`]});

    if (flags['minions.count'] == 1) { return await EventQueue.enqueueEvent('starving-single', { priority:'next' }); }

    throw `TODO: Need a starvation event that matches the game's current state.`
  },

});
