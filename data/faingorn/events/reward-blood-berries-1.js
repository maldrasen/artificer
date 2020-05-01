Event.build('reward-blood-berries-1', {

  // This is a loation event because it should be triggered by the player, it
  // can be turned off by setting the order to false.
  setting: {
    phase: 'any-time',
    location: 'great-hall',
  },

  requires: [
    'resource.blood-berries>=100',
    'flag.order.reward-blood-berries=Y'
  ],

  stages:[{
    pages:[
    ]
  }],


  // I want to randomly select a group of scaven for this event, but I think
  // that has to be done in an onStart event? Or perhaps is could be an option
  // for the actors property. Can't be done yet though actually.
  onStart: async state => {

  },

  onFinish: async choices => {
  },

});
