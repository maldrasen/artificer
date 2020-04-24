Event.build('unlock-resting', {

  setting: {
    phase: 'morning',
    location: 'great-hall'
  },

  requires: ['minions.badly-injured-count>0'],
  actors: { C:'most-injured-minion' },

  stages:[{
    pages:[
      { text:`(*) {{C::character.first-name}} is badly injured. I should let them rest.` }
    ]
  }],

  onFinish: async choices => {
    Flag.set('plan-view.roles.rest','Y');
  },

});
