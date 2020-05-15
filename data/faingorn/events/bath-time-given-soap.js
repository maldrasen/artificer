Event.build('bath-time-given-soap', {

  setting: {
    phase: 'morning',
    location: 'bath'
  },

  stages:[{
    pages:[
      { text:`(*) Ravingari gave me some soap. I gather a minion or two for a bath.` }
    ]
  }],

  onFinish: async choices => {
    Game.chainEvent('bath-time');
  },

});
