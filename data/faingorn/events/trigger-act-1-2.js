Event.build('trigger-act-1-2', {

  setting: {
    phase: 'wake',
    location: 'courtyard'
  },

  requires:[
    'flag.plan-view.missions',
    'flag.plan-view.roles.hunter',
  ],
  actors: { C:'flag=character.first-scaven' },

  stages:[{
    pages:[
      { text:`I wake up early today. Early enough to step out onto the courtyard walls to watch the sun rise. I feel
          like I've really started to make some progress getting settled into {{game|dayNumber}}. It's not comfortable
          living by any means, though I feel like I'm at the point where I can start making it so.` },
      { text:`There's so much still to do though. The entire keep's still basically a ruin. I've done what I can to
          clean out the great hall, but there are piles of debris, dirt, bones and shit scattered throughout the rest
          of the keep.` },
      { text:`My first priority should be getting the place cleaned up a bit better. At least the lower floors.` },
      { text:`Once that's done I can work on getting the keep's workshop functional again. There's only so much I can
          do without tools, but if I repair the forge I can work on making some new ones.` },
      { text:`I'll need both stone and wood to make the necessary repairs, but I can always send
          {{C::character.firstName}} out to gather some.` },
      { text:`I think it would be a good time to start growing a garden as well. The courtyard is sheltered from the
          wind, so crops would grow better here than out on the plateau. Food is one thing, but growing my own
          ingredients is one of the first steps to getting my alchemy lab set up.` },
      { text:`With that in mind in head back downstairs to start the day's work.` },
    ]
  }],

  onFinish: async choices => {
    // TODO: Create and unlock project, clear lower keep.
    // TODO: Create and unlock project, prepare garden.

    Flag.setAll({
      'game.current-act':         'act-1-2',
      'game.current-act-started': Game.dayNumber(),
      'mission.gather-stone':     'Y',
      'mission.gather-timber':    'Y',
    });
  },

});
