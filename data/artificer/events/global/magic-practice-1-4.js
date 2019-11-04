Event.build('magic-practice-1-4', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',

  stages:[{
    pages:[
      { text:`Magic Practice 1-4` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'magic-practice-2-1' }]);
  },

});
