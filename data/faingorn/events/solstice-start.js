Event.build('solstice-start', {

  setting: {
    phase: 'after-work',
    location: 'great-hall'
  },

  actors: { C:'was-hunting' },
  chance: 10,

  requires:[
    'game.dayNumber>20',
    'minions.hunter-count>0',
    { or:['player.physical>=20','player.magical>=20'] }
  ],

  stages:[{
    pages:[
      { text:`(*) When {{C::character.firstName}} was out hunting {{he}} spotted a caprien girl who had been captured
          and tied to a tree. Having been captured by paladins, she probably won't last the night. You should go rescue
          her.` }
    ]
  },{
    selectionPage: true,
    selectionKey: 'action',
    selections:[
      { text:`Go and rescue her tonight.`, value:'rescue'    },
      { text:`No, it's too dangerous.`,    value:'pussy-out' },
    ]
  },{
    choice:{ action:'pussy-out' },
    pages:[{ text:`No. I'm not ready to face the paladins, not for some caprien girl. She's on her own.` }],
  }],

  onFinish: async choices => {
    if (choices.action == 'rescue') {
      await EventFunctions.createSolstice();
      Game.chainEvent('solstice-rescue');
    }
  },

});
