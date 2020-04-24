Event.build('rat-thief-strikes-again', {
  repeatable: true,

  setting: {
    phase: 'early',
    location: 'great-hall',
  },

  requires:[
    'resource.blood-berries>=24',
  ],

  stages:[{
    pages:[
      { text:`(*) It looks like the rat thief has struck again.`},
      { text:`(*) I need to finish that storeroom in order to catch him.`},
    ]
  }],

  onFinish: async choices => {
    Resource.destroy({ where:{ code:'blood-berries' }});
    AvailableEvent.add('rat-thief-strikes-again');
  },

});
