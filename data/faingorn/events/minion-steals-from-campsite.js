Event.build('minion-steals-from-campsite', {

  setting: {
    phase: 'after-work',
    location: 'hinterlands-woods'
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} steals from the campsite.` }
    ]
  }],

  onFinish: async choices => {
    AvailableEvent.add('bath-time-find-soap');
    AvailableEvent.add('ravingari-tracks-down-thief', {
      state:{ actors:{ C:choices.event.actorIDs.C }},
      requires:[`game.dayNumber>${Game.dayNumber()+3}`],
    });
  },

});
