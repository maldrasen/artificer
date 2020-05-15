Event.build('investigating-campsite', {

  setting: {
    phase: 'before-work',
    location: 'hinterlands-woods'
  },

  stages:[{
    pages:[
      { text:`(*) I investigated the campsite and met Ravingari.` }
    ]
  }],

  onFinish: async choices => {},

});
