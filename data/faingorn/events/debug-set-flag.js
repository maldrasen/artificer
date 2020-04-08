Event.build('debug-set-flag', {
  background: { code:'void' },
  repeatable: true,

  stages:[
    { formPage:'debug-set-flag' },
  ],

  onFinish: async choices => {
    Flag.set(choices.code, choices.value);
    log(`Set: ${choices.code} = ${choices.value}`);
  },

});
