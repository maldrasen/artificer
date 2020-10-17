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
        { text:`TODO: Game introduction event.`},
      ]
    },{
      formPage: 'name-and-gender-form'
    },{
      formPage: 'sexuality-form'
    },{
      pages: [
        { text:`TODO: Game start.` }
      ]
    }
  ],

  onFinish: async choices => {
    // Next Big TODO
    // await Player.build(choices);
  },

});
