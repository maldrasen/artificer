Event.build('explore.discover-campsite', {

  setting:{
    phase: 'after-work',
    location: 'report-location',
  },

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} returns from exploring. {{He}} discovered a trapper's campsite. What
          should I do?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'action',
    selections:[
      { text:'Investigate the camp myself',  value:'investigate' },
      { text:'Steal supplies from the camp', value:'steal' },
      { text:'Ignore it',                    value:'ignore' },
    ]
  }],

  onFinish: async choices => {
    if (choices.action == 'investigate') { AvailableProject.add('investigate-campsite'); }
    if (choices.action == 'steal') { Flag.set('mission.steal-from-campsite','Y');  }
    if (choices.action == 'ignore') {
      AvailableEvent.add('minion-robs-campsite', {
        state:{ actors:{ C:choices.event.actorIDs.C }},
        requires:[`game.dayNumber>${Game.dayNumber()+2}`],
      });
    }
  },

});
