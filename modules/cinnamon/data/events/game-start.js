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
    // await Player.forge(choices);
  },

});
