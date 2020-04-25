Event.build('unlock-hunting', {

  setting: {
    phase: 'after-work',
    location: 'great-hall'
  },

  requires: ['equipment.available.sling'],
  actors: { C:'flag=character.first-scaven' },

  stages:[{
    pages:[
      { text:`(*) I made a sling. I should equip it on a character and send them out hunting.` }
    ]
  }],

  onFinish: async choices => {
    Flag.set('plan-view.roles.hunter','Y');
  },

});
