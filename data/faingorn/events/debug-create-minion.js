Event.build('debug.create-minion', {
  background: { code:'void' },

  stages:[
    { formPage:'debug-create-minion' }
  ],

  onFinish: async choices => {
    console.log("Create Minion...",choices);
  },

});
