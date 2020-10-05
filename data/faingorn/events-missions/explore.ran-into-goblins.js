Event.build('explore.ran-into-goblins', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} ran into some goblins and probably got raped a bit.` },
    ]
  }],

  onFinish: async () => {
    // TODO: Add injuries.
  },

});
