Event.build('trigger-act-1-2', {

  setting: {
    phase: 'early',
    location: 'great-hall'
  },

  requires:[
    'flag.plan-view.missions',
    'flag.plan-view.roles.hunter',
  ],

  stages:[{
    pages:[
      { text:`(*) Act 1.2 Triggered. Unlock clearing the lower keep, preparing the gardens, and missions to gather wood
          and stone.` }
    ]
  }],

  onFinish: async choices => {
    // TODO: Create and unlock project, clear lower keep.
    // TODO: Create and unlock project, prepare garden.

    Flag.setAll({
      'game.current-act':         'act-1-2',
      'game.current-act-started': Game.dayNumber(),
      'mission.gather-stone':     'Y',
      'mission.gather-timber':    'Y',
    });
  },

});
