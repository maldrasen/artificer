Event.build('found-willow-branches', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`As instructed, {{C::character.firstName}} returns from today's foraging with several armfuls of willow branches.` },
      { text:`I take the time to look over what {{C::gender.he}} brought.` },
      { text:`It's good wood.` },
      { text:`Green still, but that's perfect for making a basket.` },
      { text:`Something in the back of my mind is telling me that it's ridiculous for me to have to do this.` },
      { text:`I feel reduced somehow that I'm planning on dedicating so much time to something as menial as basket weaving.` },
      { text:`I still don't quite understand.` },
      { text:`It's something from a previous life blending into this one.` },
      { text:`It doesn't matter.` },
      { text:`If I'm to get anywhere in this life I need to work with what I have, and currently that's a rat and a pile of sticks.` },
      { text:`I pick one up and give it a couple of swishes in the air.` },
      { text:`<i>Good and slashy,</i> indeed&hellip;` },
      { text:`I look over at my minion who's glancing nervously over at me.` },
    ]
  },

  // There are a few different paths that this event can take depending on the player's sexual preferences and the
  // choice they make here. First if the player might have sex with character we set sex=possible.
  {
    requires:['player.accepts-women','minion(C).has-pussy'],
    setChoice:{ sex:'possible' },
    pages:[{ text:`Shall I see how well they work?` }]
  },{
    requires:['player.accepts-men','minion(C).has-cock'],
    setChoice:{ sex:'possible' },
    pages:[{ text:`Shall I see how well they work?` }]
  },

  // If a character would not have sex with their minion we skip right to the end.
  {
    requires:['player.never-fucks-women','minion(C).has-pussy'],
    setChoice:{ end:'yes' },
    pages:[
      { text:`No&hellip;` },
      { text:`Perhaps if she had a lovely ballsack that was in need of a good whipping.` },
      { text:`A propper whipping is far to sexual after all.` },
    ]
  },{
    requires:['player.never-fucks-men','minion(C).has-cock'],
    setChoice:{ end:'yes' },
    pages:[
      { text:`No&hellip;` },
      { text:`Perhaps if he had some lovely tits that were in need of a good whipping.` },
      { text:`A propper whipping is far to sexual after all.` },
    ]
  },

  // If the player might have sex with this minion, we ask if they would like to whip them.
  {
    choice:{ sex:'possible' },
    selectionPage: true,
    selectionKey: 'whip',
    selections:[
      { text:`No, I need to keep {{C::gender.him}} healthy for now.`,           value:'no',  effects:['player sadist -1']},
      { text:`Yes, perhaps it will motivate {{C::gender.him}} to work harder.`, value:'yes', effects:['player sadist 1']},
    ]
  },

  // If they don't want to whip the character than this stage is played, which also then plays the following end stage.
  // If they did choose to whip their minion then a follow on event is queued and these last two stages are skipped.
  {
    choice:{ whip:'no' },
    setChoice:{ end:'yes' },
    pages:[
      { text:`No.` },
      { text:`It's an intriguing thought, but whipping {{C::gender.him}} as much as I fear I would like to, might result in {{C::gender.him}} not being able to walk the next day, and that would impact our food supply.` },
      { text:`One day for sure, just not today.` },
    ]
  },{
    choice:{ end:'yes' },
    pages:[
      { text:`I put the stick back on the pile and thank {{C::character.firstName}} for {{C::gender.his}} hard work today.` },
      { text:`{{C::gender.He}} nods and bows and slinks out of the room looking relieved.` },
      { narratorSpeaker:true, text:`Crafting has been unlocked.`, alert:{ unlock:'Crafting Tasks' }},
      { narratorSpeaker:true, text:`When planning your day's activity you can now add tasks to your plan.` },
      { narratorSpeaker:true, text:`You can start by crafting a basket to help your minion carry more when out foraging.`, alert:{ unlock:'Craft: Basket' }},
    ]
  }],

  onFinish: async choices => {
    Flag.setAll({
      'plan-view.tasks.craft': 'unlocked',
      'recipe.basket': 'unlocked',
    });

    if (choices.whip == 'yes') {
      await EventQueue.enqueueEvent(`found-willow-branches-whip`, { priority:'next', actors:{ C:choices.event.actorIDs.C }});
    }
  },

});
