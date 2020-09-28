Event.build('explore.ran-into-kobolds', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} ran into some kobolds and probably got raped a bit.` },
    ]
  }],

  onFinish: async () => {
    // TODO: Add injuries.
  },

});
