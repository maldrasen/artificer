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
        { text:'Stage 0 - Normal Start',         value:'stage-0' },
        // TODO: Add Stage 1 once all the stage 0 events have been rewritten, that way we have a better idea what the
        //       stage actually looks like.
        { text:'Stage 1 - The Real Game Begins', value:'stage-0' },
      ]
    },
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
    await GameStage.setStage(choices.stage);
  },

});
