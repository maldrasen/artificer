Event.build('rat-thief-kill-quick', {

  stages:[{
    pages:[
      { text:`(*) I quickly kill {{C::character.firstName}}.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
