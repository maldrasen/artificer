Event.build('betrayal', {

  setting:{
    phase: 'late-night',
    location: 'player-bedroom',
  },

  stages:[{
    pages:[
      { text:`I startle awake sometime in the middle of the night.` },
    ]
  }],

  // TODO: Like the starvation events, this event can branch in a few ways depending on the number of minions who are
  //       betraying you at once, and what kind of minions they are. We'll first determine how your minion attacks you.
  //       If you fail an attribute check you die. If you pass you can decide what to do with the minion that betrays
  //       you. No matter what you choose though they can no longer be a minion, though you could turn them into
  //       furnature or something perhaps. If this is your only or last minion who betrays you, that will always lead
  //       to a game over. Background will also need to be set to the player's sleeping location.
  onFinish: async () => {
    const traitors = Flag.lookup('minions.traitorous-ids').split(',');

    if (Flag.lookup('minions.traitorous-count') == 1) {
      return CurrentEvent.chain('betrayal-single', { actors:{ C:traitors[0] }});
    }

    throw `TODO: Need a betrayal event that matches the game's current state.`
  },

});
