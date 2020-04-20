Event.build('magic-practice-1-4', {

  setting: {
    phase: 'before-work',
    location: 'great-hall'
  },

  requires: ['flag.player.meditate-count>=8','player.magical>=15'],

  stages:[{
    pages:[
      { text:`Meditating has become a regular routine now. It's a good way I think to center myself during the day. And
          in the time since I started this regular practice I feel like my understanding has really grown.` },
      { text:`When I close my eyes I can envision the roiling chaotic well of energy I draw power from.` },
      { text:`The Maelstrom.` },
      { text:`I'm not sure if it's something I'm just imagining, some way to visualize what I do, or if really exists
          in some way.` },
      { text:`The Maelstrom might just be in my head, but that doesn't mean it's not real. It seems familiar, in the
          same way that all the forces were familiar to me once I remembered how to control them.` },

      { background:{ location:'courtyard', time:'morning' },
        text:`Feeling a bit more energetic than usual I walk outside to the courtyard.` },
      { text:`The early morning air is cool and crisp. I raise my arms and form a whirlwind around me. Moving the air
          is just another application of force after all.` },
      { text:`Small sticks, leaves, and other debris are drawn into the vortex. I light it all on fire, surrounding
          myself in burning embers. It's taking everything that I have, but I want more.` },
      { text:`The air crackles with energy, sparks arcing from the stones and pebbles flying around me. Finally, I drop
          to my knees, letting the energy storm dissipate.` },
      { text:`I'm spent.` },
      { text:`Still, it's a noticeable improvement, and I'm far stronger than I was when I first arrived here.` },
      { narratorSpeaker:true, alert:{ unlock:'Sphere: Maelstrom' }, text:`You now have a full understanding of the
          Maelstrom sphere. Each sphere of magic represents a domain of control. As you unlock more spheres the
          variety of things you can do magically will increase.` },
    ]
  }],

  onFinish: async choices => {
    const count = Flag.lookup('player.meditate-count');

    AvailableEvent.add('magic-practice-2-1', {
      requires:[`flag.player.meditate-count=${count+3}`,`player.magical>=20`]
    });

    Flag.set('player.maelstrom','Y');
  },

});
