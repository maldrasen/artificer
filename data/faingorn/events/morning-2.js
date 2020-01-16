Event.build('morning-2', {
  background: { location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`I wake up, in the great hall, feeling watched.` },
    ]
  }],

  onFinish: async () => {
    console.log('Done.')
  },

});
