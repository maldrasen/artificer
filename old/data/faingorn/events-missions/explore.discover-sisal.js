Event.build('explore.discover-sisal', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a field of sisal.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('mission.gather-sisal','Y');
  },

});
