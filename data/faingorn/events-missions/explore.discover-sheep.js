Event.build('explore.discover-sheep', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a flock of sheep. Even though
          you have discovered sheep you cannot capture them until you have a spinning wheel and a sheepfold.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('mission.catch-sheep','Y');
  },

});
