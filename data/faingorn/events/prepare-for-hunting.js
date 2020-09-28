Event.build('prepare-for-hunting', {

  setting: {
    phase: 'morning',
    location: 'great-hall'
  },

  actors:{ C:'flag=character.first-scaven' },

  stages:[{
    pages:[
      { text:`(*) My minion has been bringing back lots of fruits and nuts
          while out foraging, but I'm also craving some meat. I should send
          {{him}} out to hunt some small game sometime.` },
      { text:`(*) I'll need to make a sling for {{him}} first though.` }
    ]
  }],

  onFinish: async choices => {
    Flag.set('recipe.sling','Y');
    AvailableEvent.add('unlock-hunting');
  },

});
