Event.build('rat-thief-2', {

  setting: {
    phase: 'late-night',
    location: 'player-bedroom',
  },

  requires:[
    'resource.blood-berries>20',
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
