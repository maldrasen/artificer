Event.build('debug-set-flags', {
  background: { code:'void' },

  stages:[
    { formPage:'debug-set-flags' },
  ],

  onFinish: async choices => {
    console.log("Set Flags:",choices)
  },

});
