Event.build('journal-4-well-talk', {
  location: 'cellars',
  background:{ location:'cellars' },

  actors:{ C:'any-scaven' },

  stages:[{
    pages:[
      { text:`Now that I know there's something interesting down here I decide to spend some time searching the cellars
          again, and tell {{C::character.firstName}} to join me. {{He}} must know something about the depths of the
          keep, as I'm fairly certain that the scaven get into the keep from somewhere down here.` },
      { text:`It's about time I find out from where.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}," I say, "I'd like for you to show me where your tribe's
          warrens are."` },
      { actorSpeaker:'C', text:`{{He}} looks up at me a bit nervously, perhaps thinking that I'm going to start
          slaughtering {{his}} tribesmen like Malcolm used to. Eventually {{he}} nods, "Yes. Of course
          {{P::character.title}}. This way," and starts leading me through the cellars.` },
      { text:`The cellars are made up of a dozen or so small rooms, connected by short hallways. The rooms down here
          are like cells, small and thick walled to support the structure above. Though most of the rooms were used
          for storage, it's clear that a few of them must have held prisoners too at some point.` },
      { text:`They lie behind iron bars, rusted shut with age, and have manacles hanging from their back walls, clearly
          indicating what they were used for. {{C::character.firstName}} leads me to the back of the prison area and
          slips into one of these prison cells.` },
      { actorSpeaker:'C', text:`{{He}}'s small enough that {{he}} doesn't need to open the rusted bars. {{He}} just
          slips between them and scurries to the back of the cell. "Here {{P::character.title}}, tight crack. Down,
          down it crawls. Into the deep."` },
      { text:`It takes a little while to even spot what {{he}}'s talking about. A narrow gap in the back corner where
          the two walls come together. It's a <i>tight crack</i> all right, at one point it looks like it's only
          {{inches|a-few}} wide.` },
      { text:`I'm amazed that {{C::gender.he}} can squeeze through there. I certainly won't be able to. Although
          Malcolm wouldn't have been able to either, meaning there's some other passageway down here that I've
          overlooked.` },
      { playerSpeaker:true, text:`"I see&hellip; thank you {{C::character.firstName}}," I say. "One other thing. Your
          tribe, you call yourselves the Deep Hole. That isn't just a name, or a sex thing though is it?"` },
      { playerSpeaker:true, text:`"There's a deep well somewhere back there isn't there? A very deep hole, bottomless
          even. What do you know about it?"` },
      { actorSpeaker:'C', text:`{{He}} shakes {{his}} head slowly, looking nervous still. "{{C::character.firstName}}
          hears things, there is a hole, but it is a forbidden place."` },
      { playerSpeaker:true, text:`I smirk a bit at that, "Forbidden? I've never heard of a scaven staying away from a
          place they were forbidden to be."` },
      { actorSpeaker:'C', text:`{{He}} grins as well, "Yes. Sneak into all places. There are some who go. A few come
          back. They say nothing is there, just the Deep Hole."` },
      { text:`I nod. Well, that explains how the scaven are getting into the keep at least. The way to the depths
          though remains hidden. Although it really was nothing more than curiosity that brought me down here to begin
          with.` },
      { text:`I'm not sure what I would do with a bottomless pit at the moment, and if it's as dangerous as the scaven
          seem to think it is, then perhaps it would be better to leave it be for now.` },
      { text:`However&hellip; I could see using these cells some day.` },
      { text:`The thought of having some people chained up down here&hellip; it's appealing to me.` },
    ]
  }]
});
