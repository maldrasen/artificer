Event.build('rat-thief-kill', {

  stages:[{
    pages:[
      { text:`I roughly slam {{him}} against the wall. {{His}} head impacts the stone with a dull thud, knocking
          {{him}} out for now.` },
      { text:`I pick {{his}} crumpled body off the stone floor and think to myself, "Now, what shall I do with
          {{him}}?" I really only need {{his}} body to serve as a warning to others, so I could make it quick.` },
      { text:`But I could also get creative&hellip;` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'method',
    selections:[
      { text:'Kill them quickly down in the cellars.', value:'quick', effects:['player sadist -1']},
      { text:'Mount {{him}} on the horse statue in the courtyard.', value:'mount', effects:['player sadist 2','player stretcher 1']},
    ]
  }],

  onFinish: async choices => {
    if (choices.method == 'quick') { Game.chainEvent('rat-thief-kill-quick'); }
    if (choices.method == 'mount') { Game.chainEvent('rat-thief-kill-mount'); }
  },

});
