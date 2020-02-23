Event.build('starving', {
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`We have run out of food` },
    ]
  }],

  onFinish: async () => {
    await Character.reduceAllLoyalty();

    // Enqueue one of several starvation events I think. These also depend on the status of the storeroom and
    // how many minions and what not. Also globally decrease loyalty here. If loyalty sinks to low add a mutiny or
    // betrayal event.
  },

});
