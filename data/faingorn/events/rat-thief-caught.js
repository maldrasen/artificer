Event.build('rat-thief-caught', {

  setting: {
    phase: 'late-night',
    location: 'player-bedroom',
  },

  requires:[
    'resource.blood-berries>=36',
  ],

  stages:[{
    pages:[
      { text:`(*) The rat trap is sprung. Choose what to do with them.` },
    ]
  }],

  onFinish: async choices => {
    // Keep rat as minion, kill, or send home.
  },

});
