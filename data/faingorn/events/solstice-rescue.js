Event.build('solstice-rescue', {

  actors: { C:'solstice' },

  stages:[{
    pages:[
      { text:`(*) I'm going to rescue Solstice. But how?` }
    ]
  },{
    selectionPage: true,
    selectionKey: 'action',
    selections:[
      { text:`With physical.`, value:'physical' },
      { text:`With magical.`,  value:'magical' },
      { text:`With both`,      value:'both'},
    ]
  },{
    choice:{ action:'physical' },
    pages:[{ text:`(*) I fuck their shit up.` }],
  },{
    choice:{ action:'magical' },
    pages:[{ text:`(*) I blow their shit up.` }],
  },{
    choice:{ action:'both' },
    pages:[{ text:`(*) I fuck up their shit, then blow their shit up.` }],
  },{
    pages:[{ text:`(*) Long conversation with Solstice. She explains how she was captured and offers to become my
      minion. She probably offers to blow me.` }],
  }],

  onFinish: async choices => {
    // TODO: Add all the palidin's gear as well. Weapons, armor, camping supplies.
  },

});
