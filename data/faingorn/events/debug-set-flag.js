Event.build('debug-set-flag', {

  noSettingCard: true,
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
