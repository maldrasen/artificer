Event.build('mutiny', {

  setting: {
    phase: 'wake',
    location: 'great-hall'
  },

  stages:[{
    pages:[
      { text:`TODO: My minions have mutinied, but I don't have any events written for that yet.` },
    ]
  },{
    formPage: 'game-over'
  }],

  // TODO: This event will always be a game over event. Like the starvation events, this event can branch in a few ways
  //       depending on the number of minions who are rebelling. How many are still loyal and are being fought off?
  //       How many are afraid and just watching? No matter what the situation is though the player still loses. You do
  //       need to have a minimum of 4 minions to trigger this though, so will be a little while before we write this.
  onFinish: async choices => {},

});
