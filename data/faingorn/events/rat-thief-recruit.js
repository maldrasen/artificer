Event.build('rat-thief-recruit', {

  stages:[{
    pages:[
      { text:`(*) {{C::character.firstName}} becomes one of my minions. I can
          also add a standing order to give my minions blood berries as a treat
          to increase loyalty. Otherwise this ability is forever locked out.`},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C)
    await rat.update({ type:'minion' });
  },

});
