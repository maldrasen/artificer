Event.build('unlock-resting', {

  setting: {
    phase: 'morning',
    location: 'great-hall'
  },

  requires: ['minions.badly-injured-count>0'],
  actors: { C:'most-injured-minion' },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}} is looking a little banged up, and {{his}} injuries are clearly slowing
          {{him}} down. If I send {{him}} out now, in the shape {{he}}'s in {{he}} probably won't be able to work very
          hard. I should give {{him}} a few days off to let {{his}} wounds heal.` },
      { narratorSpeaker:true, text:`Minions will recover from injuries over time, but they'll recover much faster if
          given the opportunity to spend time resting.`, alert:{ unlock:'Role: Resting' }},
    ]
  }],

  onFinish: async choices => {
    Flag.set('plan-view.roles.rest','Y');
  },

});
