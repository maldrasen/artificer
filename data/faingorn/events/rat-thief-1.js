Event.build('rat-thief-1', {

  setting: {
    phase: 'after-work',
    location: 'great-hall',
  },

  requires:[
    'resource.blood-berries>20',
    `minions.forager-count>0`
  ],

  stages:[{
    pages:[
      { text:`(*) Some rat has stolen all of the blood berries while my minion was out foraging.`},
      { text:`(*) I need to build a storeroom, which will serve as a trap.`},
    ]
  }],

  onFinish: async choices => {
    // Add project
  },

});
