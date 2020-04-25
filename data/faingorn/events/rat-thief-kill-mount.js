Event.build('rat-thief-kill-mount', {

  stages:[{
    pages:[
      { text:`(*) I mount {{C::character.firstName}} onto the horse statue's giant cock.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
