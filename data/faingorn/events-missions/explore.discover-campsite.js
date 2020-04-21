Event.build('explore.discover-campsite', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a trapper's campsite.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('mission.steal-from-campsite','Y');

    // TODO: When we steal from the campsite we don't really know what we're
    //       going to get. When they do steal some soap though we need to
    //       enqueue the bath time event. After the bath-time event is done if
    //       they steal again then we allow the ravingari-1 event. I think this
    //       could all be done here, by adding AvailableEvents with the proper
    //       requirements.
  },

});
