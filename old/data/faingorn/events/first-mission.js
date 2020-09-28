Event.build('first-mission', {
  background: { code:'journal' },

  setting: {
    phase: 'before-work',
    location: 'great-hall'
  },

  stages:[{
    pages:[
      { text:`(*) I'm sending {{C::character.firstName}} out on {{his}} first mission.` }
    ]
  }],

});
