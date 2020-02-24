Event.build('starving', {
  background:{ location:'great-hall', time:'morning' },
  repeatable: true,
  
  stages:[{
    requires: 'minions.count=1',
    pages:[{ text:`My minion and I have run out of food.` }],
  }],

  // TODO: The starvation event will be slightly different depending on the state of the keep, what upgrades you have,
  //       how many minions you have, etc. For now though we just enqueue the event for when there is only one minion.
  onFinish: async () => {
    const characters = await Character.reduceAllLoyalty();
    const flags = await Flag.getAll();

    if (flags['minions.count'] == 1) { return await EventQueue.enqueueEvent('starving-single'); }

    throw `TODO: Need a starvation event that matches the game's current state.`
  },

});
