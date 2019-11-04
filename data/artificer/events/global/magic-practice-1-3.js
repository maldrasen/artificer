Event.build('magic-practice-1-3', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',
  stages:[{
    pages:[
      { text:`Magic Practice 1-3` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'magic-practice-1-4' }]);
  },

});
