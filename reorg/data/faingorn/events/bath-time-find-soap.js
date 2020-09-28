Event.build('bath-time-find-soap', {

  setting: {
    phase: 'morning',
    location: 'courtyard'
  },

  stages:[{
    pages:[
      { text:`(*) I find a discarded bar of soap in the courtyard. A scaven took a bite out of it and threw it away.
          It was stolen from Ravingari's camp, but they didn't show it to me because they thought it was trash.` }
    ]
  }],

  onFinish: async choices => {
    Game.chainEvent('bath-time');
  },

});
