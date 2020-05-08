Event.build('rat-thief-kill-mount', {

  actors: {
    C: 'flag=character.rat-thief',
    R: 'flag=character.first-scaven',
  },

  stages:[{
    pages:[
      { text:`(*) I mount {{C::character.firstName}} onto the horse statue's giant cock.`},
    ]
  }],

  onFinish: async choices => {
    Flag.set('character.rat-thief',null);

    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
