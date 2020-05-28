Event.build('demo-over', {

  noSettingCard: true,
  setting: {
    phase: 'late-night',
    location: 'void',
  },

  requires:[
    'flag.completed.rat-thief-caught',
    'flag.completed.bath-time',
  ],

  stages:[{ formPage:'demo-over' }],
});
