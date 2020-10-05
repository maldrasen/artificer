Event.build('minion-robs-campsite', {

  setting: {
    phase: 'late-night',
    location: 'hinterlands-woods'
  },

  chance: 50,

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} robs the campsite without my permission.` }
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
