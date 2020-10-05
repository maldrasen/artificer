Event.build('ravingari-tracks-down-thief', {

  setting: {
    phase: 'wake',
    location: 'great-hall'
  },

  stages:[{
    pages:[
      { text:`(*) Ravingari has tracked down {{C::character.firstName}}.` }
    ]
  }],

  onFinish: async choices => {},

});
