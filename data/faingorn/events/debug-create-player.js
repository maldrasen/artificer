Event.build('debug-create-player', {

  noSettingCard: true,
  setting: {
    phase: 'early',
    location: 'void'
  },

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
        { text:'Act 1.1 - The Real Game Begins', value:'stage-1-1' },
        { text:'Act 1.2 - Missions Unlocked', value:'stage-1-2' },
      ]
    },
  ],

  onFinish: async choices => {
    choices.goal = Random.from(['conquest','followers','knowledge','power']);

    await Player.forge(choices);
    await GameStage.setStage(choices.stage);
  },

});
