Event.build('debug-set-flag', {
  background: { code:'void' },
  repeatable: true,

  stages:[
    { formPage:'debug-set-flag' },
  ],

  onFinish: async choices => {
    let flag = await Flag.set(choices.code, choices.value);
    log(`Set: ${flag.code} = ${flag.value}`);
  },

});
