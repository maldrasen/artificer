Event.build('explore.discover-coal', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a source of coal.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('mission.mine-for-coal','Y');
  },

});
