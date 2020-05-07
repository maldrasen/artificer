Event.build('rat-thief-release', {

  stages:[{
    pages:[
      { playerSpeaker:true, text:`I release my hold on the rat and {{he}} drops to the ground with a thud. I give
          {{him}} a dismissive nod and say, "Go, and don't return."` },
      { text:`{{He}} takes the hint and sprints down the dark hallway, towards the entrance to the cellars.` },
      { text:`It's hard to say if I'll see {{him}} again or not. {{He}}'s frightened and probably grateful I spared
          {{him}}, but did I scare {{him}} enough?` },
      { text:`Well, I won't be lenient a second time.` },
      { playerSpeaker:true, text:`I look at my destroyed storeroom and sigh. "Well, I suppose I had better clean this
          mess up."` },
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C)
    await rat.completelyRemove();
  },

});
