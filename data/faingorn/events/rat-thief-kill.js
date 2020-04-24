Event.build('rat-thief-kill', {

  stages:[{
    pages:[
      { text:`(*) I kill {{C::character.firstName}} in a way that's quite
          painful. This should set a flag that significantly increases the fear
          of new scaven minions.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C)
    await rat.completelyRemove();
  },

});
