Event.build('ambush-rat-end-2', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    requires:['player.never-fucks-men'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of tits and cunts drifting through my head.` }]
  },{
    requires:['player.never-fucks-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and balls drifting through my head.` }]
  },{
    requires:['player.accepts-men','player.accepts-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and cunts drifting through my head.` }]
  },{
    pages: [
      { text:`The next day...`, background:{ code:'black' }},
      { text:`For the third day in a row I wake with the feeling that I'm being watched.`, background:{ location:'great-hall', time:'morning' }},
      { text:`I bolt upright, quickly glancing about the room, only to find a small scaven sitting at the foot of my bed.` },
      { text:`They are very sneaky.` },
    ]
  },{
    requires:['flag.enqueued.ambush-rat-befriend'],
    pages: [
      { text:`{{R::gender.He}}‌ looks like the same scaven I spoke with yesterday, {{R::character.firstName}} I think.` },
      { text:`Truth be told, I'm suprised {{R::gender.he}} didn't try to kill me in my sleep.` },
      { text:`Perhaps {{R::gender.he}} has some small amount of respect for my power after all.` },
    ]
  },{
    requires:['flag.enqueued.ambush-rat-torment'],
    pages: [
      { text:`{{R::gender.He}}‌ looks like the same rat I held against the wall and abused yesterday, {{R::character.firstName}} I think.` },
      { text:`Truth be told, I'm suprised {{R::gender.he}} didn't try to kill me in my sleep.` },
      { text:`Perhaps {{R::gender.he}}'s too scared of me to try anything.` },
    ]
  },{
    pages: [
      { text:`I nod at {{R::gender.him}}, beconning {{R::gender.him}} to come closer.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I must admit, I didn't expect to see you again {{R::character.firstName}}."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Do you bring word from your chief?"</span>` },
      { text:`{{R::gender.He}} nods quickly, still clearly terrified of me, as though {{R::gender.he}} expects me to reach out and turn {{R::gender.him}} inside out at the slightest provocation.` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The Bone Woman spoke with the Rat King."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The Rat King says you will make Deep Hole‌ strong again."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The Bone Woman told {{R::character.firstName}} that {{R::gender.he}} must serve you."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Only the tribe matters."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"If you help the Deep Hole Scaven, then you can have {{R::character.firstName}}."</span>` },
      { text:`I can have {{R::character.firstName}}?` },
      { text:`That's unexpected.` },
      { text:`I thought that perhaps I could convince the scaven to become allies over time, but I didn't think one would willingly become my servent in such short order.` },
      { text:`Or perhaps not exactly willingly.` },
      { text:`It doesn't sound like {{R::gender.he}} had much choice in the matter.` },
      { text:`Does that make {{R::gender.him}} my slave essentially?` },
      { text:`I realize now that it was always my intent to raise an army.` },
      { text:`A thirst for conquest must be in my blood.` },
      { text:`How will I‌ decide to treat my minions though?` },
      { text:`As slaves?` },
      { text:`As companions?` },
      { text:`For now I'll just have to play this by ear.` },
      { playerSpeaker:true, text:`I nod and stand up, towering over the small rat, <span class='player-quote'>"I see. I accept your offer of service."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Now come with me, there is much work to be done."</span>` },
      { text:`<span class='narrator-quote'>You have acquired your first minion.</span>`, alert:{ unlock:'Minions' }},
      { text:`<span class='narrator-quote'>Minions can be assigned roles when you create your plan for that day.</span>` },
      { text:`<span class='narrator-quote'>They can also help you to complete projects.</span>` },
      { text:`<span class='narrator-quote'>From the minion menu you can change their equipment, inspect, and otherwise interact with them.</span>` },
      { text:`<span class='narrator-quote'>They can die if they become too sick or injured and might even turn against you don't keep them loyal or fearful.</span>` },
      { text:`<span class='narrator-quote'>Managing your minions well will be the key to success in your endeavors.</span>` },
    ]
  }],

  onFinish: async choices => {
    const game = await Game.instance();
          game.time = 'morning';
          game.dayNumber += 1;

    // Adjust your first minion to turn them into an actual minion, and make
    // them better than your average scaven.

    const rat = await Character.lookup(choices.event.actorIDs.R)
          rat.type = 'minion';

    if (rat.mental < 6) { rat.mental = 6 + Random.upTo(6) }
    if (rat.physical < 8) { rat.physical = 8 + Random.upTo(6) }
    if (rat.personal < 10) { rat.personal = 10 + Random.upTo(6) }

    await (new BodyDescriber({ character:rat })).updateDescription();
    await game.save();
    await rat.save();

    await Flag.set('locationMenu.minions','unlocked');
    await Flag.set('character.firstScaven',rat.id);
    await EventQueue.enqueueEvent('looking-outside-2');
  },

});
