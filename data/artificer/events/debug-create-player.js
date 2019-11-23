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
      onAccept: 'game-start.gender-choice',
    },{
      id:'custom-gender-page',
      genderFormPage: true
    },{
      id:'after-gender-page',
      pages: [
        { text:"Done." },
      ]
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);

    console.log((await Player.instance()));
  },

});
