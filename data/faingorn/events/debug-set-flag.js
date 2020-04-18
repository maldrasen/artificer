Event.build('debug-set-flag', {
  background: { code:'void' },

  setting: {
    phase: 'any-time',
    location: 'void'
  },

  stages:[
    { formPage:'debug-set-flag' },
  ],

  onFinish: async choices => {
    Flag.set(choices.code, choices.value);
    log(`Set: ${choices.code} = ${choices.value}`);
  },

});
