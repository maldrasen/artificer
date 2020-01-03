Event.build('debug.create-player', {
  background: { code:'void' },

  stages:[
    { chooserPage: true,
      options: 'gender-options',
      name: 'gender',
      text: "Choose the Player's gender.",
    },{
      chooserPage: true,
      options: 'species-options',
      name: 'species',
      text: "Choose the Player's species.",
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
  },

});
