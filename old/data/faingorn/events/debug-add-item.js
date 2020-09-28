Event.build('debug-add-item', {

  noSettingCard: true,
  setting: {
    phase: 'any-time',
    location: 'void'
  },

  stages:[
    { formPage:'debug-add-item' },
  ],

  onFinish: async choices => {
    await Resource.add(choices.code, parseInt(choices.count))
  },

});
