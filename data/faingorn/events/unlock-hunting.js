Event.build('unlock-hunting', {

  setting: {
    phase: 'after-work',
    location: 'great-hall'
  },

  requires: ['equipment.available.sling'],
  actors: { C:'flag=character.first-scaven' },

  stages:[{
    pages:[
      { text:`There. Now that I've made a simple sling I can send {{C::character.firstName}} off to hunt some small
          game. {{He}} won't be able to take down a deer or anything with it, but some rabbits would be tasty. Having
          a steady supply of fur and hide would be nice as well, and perhaps some day I'll start tanning leather.` },
      { narratorSpeaker:true, text:`You can now send your minions out hunting for food and hides. Before sending them
          out to hunt make sure to equip the sling you made from the minon screen. You can send minions hunting without
          any weapons, but they won't do well.`, alert:{ unlock:'Role: Hunter' }},
    ]
  }],

  onFinish: async choices => {
    Flag.set('plan-view.roles.hunter','Y');
  },

});
