Event.build('train-new-scaven-start', {

  stages:[{
    pages:[
      { text:`I‌ plan to spend the day with {{S::character.firstName}}, teaching {{S::gender.him}} exactly what serving me will entail.` },
      { text:`Of course, that's something that I'll need to figure out myself beforehand.` },
      { text:`I'm not exactly sure of what use a tiny rat{{S::gender.boy}} will be.` },
    ]
  },{
    requires: ['minion(S).has-pussy'],
    pages:[{ text:'A maid?' }]
  },{
    pages:[
      { text:`A scout?` },
      { text:`A spy?` },
    ]
  },{
    requires: ['player.has-cock'],
    pages:[{ text:'Just a cocksleeve?' }]
  },{
    requires: ['player.no-cock'],
    pages:[{ text:'Just a footstool?' }]
  },{
    pages:[
      { text:`A punching bag maybe?` },
      { text:`This is the first day of our arrangement.` },
      { text:`I need to establish what our relationship should look like.` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'sex',
    selections:[
      { text:`I value {{S::gender.him}} for {{S::gender.his}} loyalty and skills.`,           value:'no-sex', effects:['actor(S) loyalty 1']},
      { text:`{{S::gender.He}}'s here to serve my sexual needs as well.`,                     value:'sex',    effects:['player rat-fucker 1','actor(S) lascivious 1']},
      { text:`{{S::gender.He}}'s going to do whatever the fuck I tell {{S::gender.him}} to.`, value:'rough',  effects:['player dominant 1','actor(S) submissive 1','actor(S) loyal -1']},
    ]
  }],

  onFinish: async choices => {
    let state =  { actors:{ S:choices.event.actorIDs.S }};
    if (choices.sex == 'no-sex') { await EventQueue.enqueueEvent('train-new-scaven-talk',   state); }
    if (choices.sex == 'sex')    { await EventQueue.enqueueEvent('train-new-scaven-sex-1',  state); }
    if (choices.sex == 'rough')  { await EventQueue.enqueueEvent('train-new-scaven-rough-1',state); }
  },

});
