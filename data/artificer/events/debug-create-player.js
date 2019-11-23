Event.build('debug-create-player', {
  background: { code:'void' },

  stages:[
    {
      chooserPage: true,
      choices: Species.chooserOptions,
      name: 'species',
      text: "Choose the Player's species.",
    },{
      chooserPage: true,
      choices: Gender.chooserOptions,
      name: 'gender',
      text: "Choose the Player's gender.",
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
  },

});
