Event.build('magic-practice-1-4', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',

  stages:[{
    pages:[
      { text:`My morning magic practice has become a regular routine now.` },
      { text:`It's a good way I think to greet the dawn.` },
      { text:`And after a week or so of meditation and practice, I feel like my understanding has really grown.` },
      { text:`When I close my eyes I can envision the roiling chaotic well of energy I draw power from.` },
      { text:`I call it The Maelstrom.` },
      { text:`I'm not sure if it's something I've just made up, some way to visualize what I do, or if really exists in some way.` },
      { text:`The Maelstrom might just be in my head, but that doesn't mean it's not real.` },
      { text:`It seems familiar though, in the same way that electricity was familiar to me once I remembered that it existed.` },
      { text:`Feeling a bit more energetic than usual I walk outside to the courtyard.`, background:'../../resources/backgrounds/bg-courtyard-ruined.png' },
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
      { text:`(( I have fully unlocked The Maelstrom. My magical attribute has been increased by 5. ))` },
    ]
  }],

  onFinish: async () => {
    const game = await Game.instance();
    AvailableEvent.add({
      code:'magic-practice-2-1',
      requires:`game.dayNumber=${game.dayNumber+4}`
    });
  },

});
