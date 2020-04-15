Event.build('morning-1-end', {
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:'(*) End' }
    ]
  }],

  onFinish: async choices => {
  },

});
