Event.build('mutiny', {

  stages:[{
    pages:[
      { text:`My minions have mutinied.` },
    ]
  }],

  onFinish: async () => {
    // This event is always a game over. Will probably need to have different
    // versions of this depending on what minions you have of course. I think
    // you need to have a minimum of 4 minions to trigger this though.
  },

});
