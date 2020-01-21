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
      { playerSpeaker:true, text:`<span class='player-quote'>"{{R::character.firstName}},"</span> I say, <span class='player-quote'>"what do you know about that creature down below?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Skinless,"</span> {{R::gender.he}} says.` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"They hunt always for for shamen, for witches."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Always hungry for magic."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Magic?"</span> I ask.` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Yes, your magic calls them."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"They wants it."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Makes them crazy."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"They won't attack you then?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"No. No. They like to kill scaven."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Scaven fun to kill."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"But scaven are sneaky quiet."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"They don't find us."</span>` },
      { text:`I nod to {{R::character.firstName}} and watch the creature for a while longer.`},
      { text:`Now that it's of no obvious threat to me the <i>Skinless</i> creature fascinates me more than anything.` },
      { text:`It looks like nothing more than a loosely assembled pile of body parts, and should be incapable of survival by mere biological means.` },
      { text:`That it must sustain itself on magical energy is really the only way to explain it.` },
      { text:`I can't imagine how such a thing could come into being.` },
      { text:`Some dark and forbidden unholy ritual?` },
      { text:`Perhaps one of these days I'll have a chance to find out; if they don't get inside and murder me at least.` },
      { playerSpeaker:true, text:`I nod to {{R::character.firstName}}, motioning for {{R::gender.him}} to follow, <span class='player-quote'>"Come with me to the great hall."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"We have much to discuss."</span>` },
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent('morning-3',{ actors:{ R:choices.event.actorIDs.R }});
  },

});
