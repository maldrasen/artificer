Event.build('betrayal', {

  stages:[{
    pages:[
      { text:`A minion betrays me.` },
    ]
  }],

  // TODO: Like the starvation events, this event can branch in a few ways depending on the number of minions who are
  //       betraying you at once, and what kind of minions they are. We'll first determine how your minion attacks you.
  //       If you fail an attribute check you die. If you pass you can decide what to do with the minion that betrays
  //       you. No matter what you choose though they can no longer be a minion, though you could turn them into
  //       furnature or something perhaps. If this is your only or last minion who betrays you, that will always lead
  //       to a game over.
  onFinish: async () => {
    const flags = await Flag.getAll();

    if (flags['minions.traitorous-count'] == 1) { return await EventQueue.enqueueEvent('betrayal-single', { priority:'next' }); }

    throw `TODO: Need a betrayal event that matches the game's current state.`
  },

});
