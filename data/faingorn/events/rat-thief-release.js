Event.build('rat-thief-release', {

  stages:[{
    pages:[
      { text:`(*) I decide to release {{C::character.firstName}}. This should
          set a flag that significantly increases the loyalty of new scaven
          minions.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C)
    await rat.completelyRemove();
  },

});
