Event.build('game-start', {
  darkenBackground: 100,

  noSettingCard: true,
  setting: {
    phase: 'early',
    location: 'void'
  },

  stages:[{
      formPage: 'warning-form'
    },{
      pages: [
        { text:"Game Start Event" }
      ]
    }
  ],

  onFinish: async choices => {
    // Needs to be an available event?
    // summon-first-demon

    // await Player.forge(choices);
  },

});
