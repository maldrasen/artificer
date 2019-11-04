Event.build('magic-practice-1-2', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',
  stages:[{
    pages:[
      { text:`Magic Practice 1-2` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'magic-practice-1-3' }]);
  },

});
