Event.build('found-willow-branches', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`As instructed, {{C::character.firstName}} returns from today's foraging with several armfuls of willow branches.` },
      { text:`You take the time to look over what {{C::gender.he}} brought.` },
      { text:`It's good wood.` },
      { text:`Green still, but that's perfect for making a basket.` },
      { text:`Something in the back of my mind is telling me that it's ridiculous for me to have to do this.` },
      { text:`I‌ feel reduced somehow that I'm planning on dedicating so much time to something as menial as basket weaving.` },
      { text:`I still don't quite understand.` },
      { text:`It's something from a previous life blending into this one.` },
      { text:`It doesn't matter.` },
      { text:`If I'm to get anywhere in this life I need to work with what I have, and currently that's a rat and a pile of sticks.` },
      { text:`I pick one up and give it a couple of swishes in the air.` },
      { text:`<i>"Good and slashy,"</i> indeed&hellip;` },
      { text:`I look over at my minion who's glancing nervously over at me.` },
      { text:`Shall I see how well they work?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'whip',
    selections:[
      { text:`No, I need to keep {{C::gender.him}} healthy for now.`,  value:'no',   effects:['player sadist -1']},
      { text:`Yes, on her ass.`,                                       value:'ass',  effects:['player sadist 1','actor(C) health -1']},
      { text:`Yes, on her tits.`,                                      value:'tits', effects:['player sadist 2','actor(C) health -2']},
    ]
  },{
    choice:{ whip:'no' },
    pages:[
      { text:`No.` },
      { text:`It's an intriguing thought, but whipping {{C::gender.him}} as much as I fear I would like to, might result in {{C::gender.him}} not being able to walk the next day, and that would impact our food supply.` },
      { text:`One day for sure, just not today.` },
      { text:`As I put the stick back on the pile I thank {{C::character.firstName}} for {{C::gender.his}} hard work today.` },
      { text:`{{C::gender.He}} nods and bows and slinks out of the room looking relieved.` },
    ]
  }],

  onFinish: async choices => {
    // Add a task to create a basket.
  },

});
