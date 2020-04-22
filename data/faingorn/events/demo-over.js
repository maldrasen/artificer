
// TODO: Add this back in once we have a new end point.
//   { code:'demo-over', requires:['flag.completed.journal-6','flag.completed.magic-practice-1-4']},

Event.build('demo-over', {

  noSettingCard: true,
  setting: {
    phase: 'late-night',
    location: 'void',
  },

  stages:[{ formPage:'demo-over' }],
});
