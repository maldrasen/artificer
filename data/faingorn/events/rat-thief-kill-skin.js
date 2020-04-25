Event.build('rat-thief-kill-skin', {

  stages:[{
    requires: 'state.sex=yes',
    pages:[
      { text:`(*) I skin {{C::character.firstName}} alive while raping them.`},
    ]
  },{
    requires: 'state.sex=no',
    pages:[
      { text:`(*) I skin {{C::character.firstName}} alive.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
