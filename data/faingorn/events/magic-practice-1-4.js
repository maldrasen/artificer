Event.build('magic-practice-1-4', {
  background: { location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`My morning magic practice has become a regular routine now.` },
      { text:`It's a good way I think to greet the dawn.` },
      { text:`And after a week or so of meditation and practice, I feel like my understanding has really grown.` },
      { text:`When I close my eyes I can envision the roiling chaotic well of energy I draw power from.` },
      { text:`I call it The Maelstrom.` },
      { text:`I'm not sure if it's something I've just made up, some way to visualize what I do, or if really exists in some way.` },
      { text:`The Maelstrom might just be in my head, but that doesn't mean it's not real.` },
      { text:`It seems familiar though, in the same way that all the forces were familiar to me once I remembered how to control them.` },
      { text:`Feeling a bit more energetic than usual I walk outside to the courtyard.`, background:{ location:'courtyard', time:'morning' }},
      { text:`The early morning air is cool and crisp.` },
      { text:`I raise my arms and form a whirlwind around me.` },
      { text:`Moving the air is just another application of force after all.` },
      { text:`Small sticks, leaves, and other debris are drawn into the vortex.` },
      { text:`I light it all on fire, surrounding myself in burning embers.` },
      { text:`It's taking everything that I have, but I want more.` },
      { text:`The air crackles with energy, sparks arcing from the stones and pebbles flying around me.` },
      { text:`Finally, I drop to my knees, letting the energy storm dissipate.` },
      { text:`I'm spent.` },
      { text:`Still, it's a noticeable improvement.` },
      { text:`I'm far stronger than I was when I first arrived here.` },
      { text:`<span class='narrator-quote'>You have fully unlocked the Maelstrom sphere.</span>`, alert:{ unlock:'Sphere: Maelstrom' }},
      { text:`<span class='narrator-quote'>Each sphere of magic represents a domain of control over a certain substance.</span>` },
      { text:`<span class='narrator-quote'>As you unlock more spheres the variety of things you can do magically will increase.</span>` },
    ]
  }],

  onFinish: async choices => {
    const count = parseInt((await Flag.lookupValue('player.meditate-count')));

    await AvailableEvent.addAll([
      { code:'magic-practice-2-1', requires:[`flag.player.meditate-count=${count+3}`,`player.magical>=20`]},
    ]);

    await Flag.set('player.maelstrom','unlocked');
  },

});
