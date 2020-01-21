Event.build('debug-create-player', {
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
    },{
      selectionPage: true,
      selectionKey: 'stage',
      selections:[
        { text:'Stage 1 - The Real Game Begins', value:'stage-1-0' },
      ]
    },
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
    await GameStage.setStage(choices.stage);
  },

});
