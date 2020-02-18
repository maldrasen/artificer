Event.build('looking-outside-2', {
  location: 'courtyard',
  background:{ location:'courtyard-walls', time:'morning' },

  actors:{ R:'any-scaven' },

  stages:[{
    requires:['no-flag.completed.looking-outside-1'],
    pages:[
      { text:`A small door on the keep's third floor leads out onto the courtyard walls.` },
      { text:`From the top of the walls it's possible to get a complete panoramic view of the surrounding area.` },
      { text:`It's not exactly barren, not in the same way that a desert is at least.` },
      { text:`There is plant life, a few narrow trees and long stretches of tall spiky grass.` },
      { text:`It isn't what I would call thriving either though.` },
      { text:`It's a harsh land, blasted by constant and cold winds that howl through the tower at night.` },
      { text:`I can barely stand the cold myself.` },
      { text:`The keep and courtyard are sheltered from the biting winds, standing out on this parapet though I feel cold, exposed, and utterly tiny.` },
      { text:`I hear a shuffling sound coming from below.` },
      { text:`One of the creatures that chased me here has noticed me.` },
      { text:`The ground on the other side lies at least fifty feet below my perch atop the wall.` },
      { text:`It's not even attempting to climb the wall.` },
      { text:`It looks confused and desperate, pacing back and forth under me.` },
      { text:`Is it not able to come into contact with the wall?` },
      { text:`From the trail of blood it looks like it's been pacing for some time.` },
      { text:`All around the fortress are other such trails.` },
      { text:`They approach the keep, seem to look for a way in, and eventually wander off.` },
      { text:`One thing is clear, they are hunting for me.` },
      { text:`I'm not sure why they haven't been able to get any closer, but for the moment it seems I'm safe here.` },
      { text:`But I'm also trapped.` },
    ]
  },{
    requires:['flag.completed.looking-outside-1'],
    pages:[
      { text:`I return to the walkway on top of the keep's high wall, again buffeted by this land's constant and cold wind.` },
      { text:`{{R::character.firstName}} walks along with me.` },
      { text:`I'm hoping that {{R::gender.he}} can answer some questions.` },
      { text:`As expected one of the abominations is pacing back and forth, just beyond the castle wall; tirelessly looking for some way to get inside.` },
    ]
  },{
    pages:[
      { playerSpeaker:true, text:`"{{R::character.firstName}}," I say, "what do you know about that creature down below?"` },
      { actorSpeaker:'R', text:`"Skinless," {{R::gender.he}} says.` },
      { actorSpeaker:'R', text:`"They hunt always for for shamen, for witches."` },
      { actorSpeaker:'R', text:`"Always hungry for magic."` },
      { playerSpeaker:true, text:`"Magic?" I ask.` },
      { actorSpeaker:'R', text:`"Yes, your magic calls them."` },
      { actorSpeaker:'R', text:`"They wants it."` },
      { actorSpeaker:'R', text:`"Makes them crazy."` },
      { playerSpeaker:true, text:`"They won't attack you then?"` },
      { actorSpeaker:'R', text:`"No. No. They like to kill scaven."` },
      { actorSpeaker:'R', text:`"Scaven fun to kill."` },
      { actorSpeaker:'R', text:`"But scaven are sneaky quiet."` },
      { actorSpeaker:'R', text:`"They don't find us."` },
      { text:`I nod to {{R::character.firstName}} and watch the creature for a while longer.`},
      { text:`Now that it's of no obvious threat to me the <i>Skinless</i> creature fascinates me more than anything.` },
      { text:`It looks like nothing more than a loosely assembled pile of body parts, and should be incapable of survival by mere biological means.` },
      { text:`That it must sustain itself on magical energy is really the only way to explain it.` },
      { text:`I can't imagine how such a thing could come into being.` },
      { text:`Some dark and forbidden unholy ritual?` },
      { text:`Perhaps one of these days I'll have a chance to find out; if they don't get inside and murder me at least.` },
      { playerSpeaker:true, text:`I nod to {{R::character.firstName}}, motioning for {{R::gender.him}} to follow, "Come with me to the great hall."` },
      { playerSpeaker:true, text:`"We have much to discuss."` },
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent('morning-3',{ actors:{ R:choices.event.actorIDs.R }});
  },

});
