Event.build('journal-4', {
  background: { code:'journal' },

  setting: {
    phase: 'night',
    location: 'player-bedroom'
  },

  actors: { R:'any-scaven' },

  stages:[{
    pages:[
      { text:`Again, I prepare for bed by reading a bit of Malcolm's journal.` },
      { text:`Though he spends several days at it, there isn't much more he can learn from the enigmatic hole. In the
          end, the longest he's able to track something falling into The Well is twenty seconds.` },
      { requires:'game.metric', text:`Which means that it must be at least a few kilometers deep. That's an
          insurmountable depth, even for a mage. I can manage a rudimentary flight spell, enough to propel me a
          hundred meters or so. Flying though feels like sprinting, so while a hundred meters is manageable, flying
          several kilometers?` },
      { requires:'game.not-metric', text:`Which means that it must be at least a mile deep. That's an insurmountable
          depth, even for a mage. I can manage a rudimentary flight spell, enough to propel me a few hundred feet or
          so. Flying though feels like sprinting, so while a hundred yards is manageable, flying a mile?` },
      { text:`Vertically? Well, it's nothing I could do. Not without the risk that I would simply pass out from the
          effort it would take to fly back up. Unconscious, I would then fall to my death for sure.` },
      { requires:'game.metric', text:`Malcolm seems to have come to the same conclusion and rules out everything else
          that obviously wouldn't work. A kilometer long rope would break under it's own weight. Climbing down The
          Well would take days, and what happens when you climb for days and still find no sign of the bottom?` },
      { requires:'game.not-metric', text:`Malcolm seems to have come to the same conclusion and rules out everything
          else that obviously wouldn't work. A mile long rope would break under it's own weight. Climbing down The
          Well would take days, and what happens when you climb for days and still find no sign of the bottom?` },
      { text:`No, a better solution would have to be found.` },
      { text:`Instead of worrying about The Well, Malcolm instead turned his attention to the rest of the ancient
          vaults. Various architectural elements of the vault had expertly engraved, but the engravings were difficult
          to understand.` },
      { text:`They're entirely abstract, and while they might simply be decorative, he felt there had to be some deeper
          meaning to them. The carvings were organic in places and sharply angular and geometric in others; phasing
          between sensual and mechanical.` },
      { text:`The overall impression they left in Malcolm was of something deeply unsettling, though it was difficult
          for him to explain why.` },
      { text:`Meanwhile, while Malcolm was deep underground, Wren and Ravingari spent most of their time working on the
          sort of crafts best suited for the winter months, pottery, blacksmithing and the like. Ravingari had run out
          of the sisal that he had been using to make rugs though, so new rugs would have to wait until spring.` },
      { text:`Hmm, sisal. Now that I think about it having some sisal would be of great benefit to me in my current
          situation. It's is a hearty plant, and a course and durable fiber can be harvested from its leaves. It's used
          to make rope primarily, but you can also use it to make rugs and burlap cloth.` },
      { text:`Perhaps I could send {{R::character.firstName}} out to gather some for me. {{He}} needs to find it first
          obviously, but I think our food situation is steady enough that I should be able to send {{him}} out every
          once and a while to explore the sorrounding area.` },
      { narratorSpeaker:true, text:`You can now send your minions out on missions. Missions may take your minions away
          from the keep for several days or longer so you should supply them with food and equipment for the
          journey.`, alert:{ unlock:'Missions' }},
      { narratorSpeaker:true, text:`Exploring the Hinterlands will open up new places and new resources for your
          minions to collect, though without tools they'll only be able to bring back what they can harvest by hand
          and carry.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.add('journal-5');
    Flag.setAll({
      'plan-view.missions': 'Y',
      'mission.gather-stone': 'Y',
      'mission.gather-timber': 'Y',
      'mission.explore-hinterlands': 'Y',
    });
  },

});
