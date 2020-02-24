Event.build('ambush-rat-befriend', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`I relax my arm around the rat's throat just enough to allow {{R::gender.him}} to breathe and speak while still applying enough pressure to let {{R::gender.him}} know that they're still privileges that I could revoke at any moment.` },
      { playerSpeaker:true, text:`"Can you speak?" I ask.` },
      { otherSpeaker:'Rat', text:`"Yes!" {{R::gender.he}} squeeks back, "No hurt! No kill!"` },
      { playerSpeaker:true, text:`"I don't want to hurt you, but I do need you to answer some questions for me."` },
      { playerSpeaker:true, text:`"Can you do that for me?"` },
      { text:`I carefully release {{R::gender.him}} and push {{R::gender.his}} back up against the wall, making it difficult for {{R::gender.him}} to slip past me if {{R::gender.he}} decides to bolt.` },
      { otherSpeaker:'Rat', text:`{{R::gender.He}} looks up at me fearfully, "What do you want?"` },
      { text:`I briefly consider asking {{R::gender.him}} all the very basics; Where are we? What are you?` },
      { text:`But then, perhaps it wouldn't be wise to reveal that I have absolutely no memory or know anything at all about where we are.` },
      { text:`I need to remain cautious.` },
      { text:`I'd rather not reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`"Let's start simple, what's your name?"` },
      { actorSpeaker:'R', text:`"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."` },
      { text:`{{R::gender.His}} name is a barely pronounceable sequence of squeaks.` },
      { text:`Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"` },
      { actorSpeaker:'R', text:`{{R::gender.He}} nods slowly. "Abandoned yes, but we live here still, down in the deep dark."` },
      { playerSpeaker:true, text:`"Underneath the keep? Interesting."` },
      { text:`I wrack my brain, trying to remember anything I could about the scaven, their society, what motivates them?` },
      { text:`Nothing.` },
      { text:`I'm going to have to play this by ear and hope for the best.` },
      { text:`Given the nature and state of {{R::gender.his}} dress I can only guess that the scaven have some sort of tribal structure, and that overall they're not doing that well.` },
      { text:`I can use this to my advantage.` },
      { playerSpeaker:true, text:`"Well, it would seem you are in luck then," I say.` },
      { playerSpeaker:true, text:`"I have come here to claim this keep as my own."` },
      { playerSpeaker:true, text:`"Everything within this place now belongs to me."` },
      { playerSpeaker:true, text:`"I have need of servents though."` },
      { playerSpeaker:true, text:`"I would like for you to return to your chief and let him know that a powerful wizard is now the {{P::character.title}} of this keep."` },
      { playerSpeaker:true, text:`"If the Deep Hole Scaven serve me, they will become powerful, and feared again."`, effects:['actor(R) loyal 1']},
      { playerSpeaker:true, text:`"Understand?"` },
      { text:`{{R::gender.He}} looks me up and down somewhat doubtfully, no doubt noticing that I'm dressed in nothing but some stolen furs.` },
      { text:`To make my point, I reach out towards the dry wood in the fireplace and with a dramatic hand motion cause it to burst into flame.` },
      { text:`The rat cowers away from the sudden cascade of sparks and smoke erupting from the fireplace.` },
      { actorSpeaker:'R', text:`"Eek! Yes, yes {{P::character.title}}, I will go tell the chief this."` },
      { playerSpeaker:true, text:`"Good. You may go."` },
      { text:`The scaven sprints from the room, running on all fours.` },
      { text:`As soon as {{R::gender.he}} leaves though I collapse into a nearby chair.` },
      { text:`I'm panting, sweating.` },
      { text:`Heh, some powerful wizard, I can barely use magic at all without almost collapsing.` },
      { text:`I don't know if my gambit will work.` },
      { text:`Only time will tell I suppose.` },
    ]
  }],

  onFinish: async choices => {
    await Game.updateLocation('great-hall');
    await EventQueue.enqueueEvent('ambush-rat-end-1',{ actors:{ R:choices.event.actorIDs.R }});
  },

});
