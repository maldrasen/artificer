Event.build('debug-create-player', {
  background: { code:'void' },

  stages:[
    { chooserPage: true,
      choices: state => { return Gender.chooserOptions(state); },
      name: 'gender',
      text: "Choose the Player's gender.",
    },{
      chooserPage: true,
      choices: state => { return Species.chooserOptions(state); },
      name: 'species',
      text: "Choose the Player's species.",
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
  },

});
