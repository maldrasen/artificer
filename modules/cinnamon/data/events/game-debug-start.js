Event.build('game-debug-start', {

  setting: {
    phase: 'early',
    location: 'void'
  },

  stages:[{
      pages: [
        { text:"Debug Start Event" }
      ]
    }
  ],

  onFinish: async choices => {},

});
