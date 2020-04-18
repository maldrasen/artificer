Event.build('ambush-rat-end-2', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    requires:['player.never-fucks-men'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of beautiful women drifting through my head.` }]
  },{
    requires:['player.never-fucks-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of giant cocks drifting through my head.` }]
  },{
    requires:['player.accepts-men','player.accepts-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of various lovers drifting through my head.` }]
  },{
    pages: [
      { text:`The next day...`, background:{ code:'black' }},
      { background:{ location:'great-hall', time:'morning' }, text:`Again I wake with the feeling that I'm being
          watched and bolt upright off of my pile of furs, ready to defend myself. The small scaven sitting at my feet
          shrinks back in fear, looking ready to bolt at any moment. I sigh and hold out my hand, letting {{him}} know
          it's ok.` },
    ]
  },{
    requires:['flag.enqueued.ambush-rat-befriend'],
    pages: [
      { text:`{{He}} looks like the same scaven I spoke with yesterday, {{R::character.firstName}} I think. Truth be
          told, I'm suprised {{he}} didn't try to kill me in my sleep. Perhaps {{he}} has some small amount of respect
          for my power after all.` },
    ]
  },{
    requires:['flag.enqueued.ambush-rat-torment'],
    pages: [
      { text:`{{He}} looks like the same rat I held against the wall and abused yesterday, {{R::character.firstName}} I
          think. Truth be told, I'm suprised {{he}} didn't try to kill me in my sleep. Perhaps {{R::gender.he}}'s too
          scared of me to try anything.` },
    ]
  },{
    pages: [
      { text:`{{He}} doesn't seem to mind that I'm sitting here naked in front of {{him}} either. I wonder how long
          {{he}}'s been watching me for. I nod at {{him}}, beckoning for {{him}} to come closer.` },
      { playerSpeaker:true, text:`"I must admit, I didn't expect to see you again {{R::character.firstName}}. Do you
          bring word from your chief?"` },
      { text:`{{He}} nods quickly, still clearly terrified of me, as though {{he}} expects me to reach out and turn
         {{him}} inside out at the slightest provocation.` },
      { actorSpeaker:'R', text:`"The Bone Woman spoke with the Rat King. The Rat King says you will make Deep Hole
         strong again. The Bone Woman told {{R::character.firstName}} that {{he}} must serve you. Only the tribe
         matters. If you help the Deep Hole Scaven, then you can have {{R::character.firstName}}."` },
      { text:`I can have {{R::character.firstName}}?` },
      { text:`That's unexpected.` },
      { text:`I thought that perhaps I could convince the scaven to become allies over time, but I didn't think one
          would willingly become my servent in such short order. Through perhaps not exactly willing. It doesn't sound
          like {{R::gender.he}} had much choice in the matter.` },
      { text:`Would that make {{him}} my slave essentially? Though I don't quite understand where this thirst for
          conquest is coming from it seems that it was always my intent to raise an army. How will I decide to treat my
          minions though?` },
      { text:`As slaves?` },
      { text:`As companions?` },
      { text:`For now I'll just have to play this by ear.` },
      { playerSpeaker:true, text:`Nodding I say, "I see. Very well then {{R::character.firstName}}. I accept your offer
          of service, that is if you do agree to belong to me and do whatever I may ask of you."` },
      { actorSpeaker:'R', text:`The scaven, though clearly nervous about the whole situation, nods and accepts with a
          simple, "Yes {{P::character.title}}."` },
      { narratorSpeaker:true, text:`You have acquired your first minion.`, alert:{ unlock:'Minions' }},
      { narratorSpeaker:true, text:`Minions can be assigned roles when you create your plan for that day, and will
          eventually be able to help you to complete projects or be sent on missions. From the minion menu you can
          change their equipment, inspect, and otherwise interact with them.` },
      { narratorSpeaker:true, text:`They can die if they become too sick or injured and might even turn against you
          don't keep them loyal enough or fearful enough. Managing your minions well will be the key to success in your
          endeavors.` },
    ]
  }],

  // We have to artifically advance the day today as there's really nothing
  // unlocked that the player can do to create the day's plan.
  onFinish: async choices => {
    const game = await Game.instance();
    await game.update({
      time: 'morning',
      dayNumber: (game.dayNumber+1)
    });

    const rat = await Character.lookup(choices.event.actorIDs.R)
    await rat.update({type:'minion'});

    await Flag.setAll({
      'location-menu.minions': 'unlocked',
      'report-view.show-food': 'unlocked',
    });

    await EventQueue.enqueueEvent('morning-3',{ actors:{ R:rat.id }});
  },

});
