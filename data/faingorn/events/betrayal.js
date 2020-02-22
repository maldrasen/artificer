Event.build('betrayal', {

  stages:[{
    pages:[
      { text:`A minion betrays me.` },
    ]
  }],

  onFinish: async () => {
    // This event can branch in a few ways too I think. Against one minion you should have a chance to defend yourself.
    // We first determine how your minion attacks you. If you fail an attribute check you die. If you pass you can
    // decide what to do with the minion that betrays you. No matter what you choose though they can no longer me a
    // minion, though you could turn them into furnature or something perhaps.

    // If this is your last minion who betrays you, that needs to be a game over situation as well.
  },

});
