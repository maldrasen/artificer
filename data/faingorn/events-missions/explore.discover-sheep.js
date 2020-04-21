Event.build('explore.discover-sheep', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a flock of sheep.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('mission.catch-sheep','Y');
  },

});
