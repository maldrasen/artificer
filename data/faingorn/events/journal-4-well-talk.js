Event.build('journal-4-well-talk', {
  location: 'cellars',
  background:{ location:'cellars' },

  actors:{ C:'any-scaven' },

  stages:[{
    pages:[
      { text:`Now that I know there's something interesting down here I decide to spend some time searching the cellars again.` },
      { text:`I tell {{C::character.firstName}} to join me.` },
      { text:`{{C::gender.He}} must know something about the depths of the keep, as I'm fairly certain that the scaven get into the keep from somewhere down here.` },
      { text:`It's about time I find out from where.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}," I say, "I'd like for you to show me where your tribe's warrens are."` },
      { text:`{{C::gender.He}} looks up at me a bit nervously, perhaps thinking that I'm going to start slaughtering {{C::gender.his}} tribesmen like Malcolm used to.` },
      { actorSpeaker:'C', text:`{{C::gender.He}} eventually nods, "Yes. Of course {{P::character.title}}. This way," and starts leading me through the cellars.` },
      { text:`The cellars are made up of a dozen or so small rooms, connected by short hallways.` },
      { text:`The rooms down here are like cells, small and thick walled to support the structure above.` },
      { text:`Though most of the rooms were used for storage, it's clear that a few of them must have held prisoners too at some point.` },
      { text:`A few of the smaller rooms lie behind iron bars, rusted shut with age.` },
      { text:`These tiny cells have manacles hanging from their back walls, clearly indicating what they were used for.` },
      { text:`{{C::character.firstName}} leads me to the back of the prison area and slips into one of the cells.` },
      { text:`{{C::gender.He}}'s small enough that {{C::gender.he}} doesn't need to open the rusted bars.` },
      { text:`{{C::gender.He}} just slips between them.` },
      { text:`While I jerk a couple times at the bars the rat scurries to the back of the cell.` },
      { actorSpeaker:'C', text:`"Here {{P::character.title}}, tight crack. Down, down it crawls. Into the deep."` },
      { text:`It takes me a little while for me to even spot what {{C::gender.he}}'s talking about.` },
      { text:`A narrow crack, between the back and side wall of the cell {{C::gender.he}} squeezed into.` },
      { text:`It's a <i>tight crack</i> all right, at one point it looks like it's only {{inches|a-few}} wide.` },
      { text:`I'm amazed that {{C::gender.he}} can squeeze through there.` },
      { text:`I certainly won't be able to.` },
      { text:`Although Malcolm and Wren wouldn't have been able to squeeze through there either, meaning there's some other passageway down here that I've overlooked.` },
      { playerSpeaker:true, text:`"I see&hellip; thank you."` },
      { playerSpeaker:true, text:`"Tell me one other thing {{C::character.firstName}}."` },
      { playerSpeaker:true, text:`"Your tribe, you call yourselves the Deep Hole."` },
      { playerSpeaker:true, text:`"That isn't just a name, or a sex thing&hellip;"` },
      { playerSpeaker:true, text:`"There's a deep well somewhere back there isn't there?"` },
      { playerSpeaker:true, text:`"A very deep hole, bottomless even."` },
      { playerSpeaker:true, text:`"Do you know it?"` },
      { text:`{{C::gender.He}} shakes {{C::gender.his}} head slowly, looking nervous still.` },
      { actorSpeaker:'C', text:`"There are forbidden places, down in the deep."` },
      { actorSpeaker:'C', text:`"Old places."` },
      { actorSpeaker:'C', text:`"Old magic."` },
      { actorSpeaker:'C', text:`"There&hellip; there is a hole, but we don't go there."` },
      { actorSpeaker:'C', text:`"Not anymore."` },
      { playerSpeaker:true, text:`"Not anymore?"` },
      { playerSpeaker:true, text:`"What happened?"` },
      { actorSpeaker:'C', text:`{{C::gender.He}} shakes {{C::gender.his}} head again, "Don't know. It is forbidden."` },
      { playerSpeaker:true, text:`I smirk a bit at that, "Forbidden? I've never heard of a scaven staying away from a place they were forbidden to be."` },
      { actorSpeaker:'C', text:`{{C::gender.He}} grins a bit at that as well, "Yes. Sneak into all places."` },
      { actorSpeaker:'C', text:`"But then, sometimes we don't come back."` },
      { actorSpeaker:'C', text:`"Down in the deep, many scaven, they disappear like smoke."` },
      { text:`I nod.` },
      { text:`Well, that explains how the scaven are getting into the keep at least.` },
      { text:`The way to the depths though remains hidden.` },
      { text:`Although it really was nothing more than curiosity that brought me down here to begin with.` },
      { text:`I'm not sure what I would do with a bottomless pit at the moment, and if it's as dangerous as the scaven seem to think it is, then perhaps it would be better to leave it be for now.` },
      { text:`However, I could see using these cells some day.` },
      { text:`The thought of having some people chained up down here&hellip;` },
      { text:`It's appealing to me.` },
    ]
  }]
});
