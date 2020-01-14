Event.build('morning-1', {
  background: { code:'courtyard', time:'morning' },
  time:'morning',

  stages:[{
    pages:[
      { text:`I wake up, I'm in the courtyard.` },
    ]
  }],

  onFinish: async () => {
    console.log('Done.')
  },

});
