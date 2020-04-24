Event.build('rat-thief-strikes-again', {
  repeatable: true,

  setting: {
    phase: 'early',
    location: 'great-hall',
  },

  requires:[
    'resource.blood-berries>30',
  ],

  stages:[{
    pages:[
      { text:`(*) It looks like the rat thief has struck again.`},
      { text:`(*) I need to finish that storeroom in order to catch him.`},
    ]
  }],

  onFinish: async choices => {
    AvailableEvent.add('rat-thief-strikes-again');
  },

});
