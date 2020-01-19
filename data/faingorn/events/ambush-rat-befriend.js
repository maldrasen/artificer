Event.build('ambush-rat-befriend', {
  background:{ location:'great-hall' },
  actors:{ R:'any-scaven' },

  stages:[{
    pages:[
      { text:`I release the rat's throat and push {{R::gender.him}} out at arm's length while still holding {{R::gender.his}} arms behind {{R::gender.him}}, in a position that it's unlikely that {{R::gender.he}}'ll be able to bite me from.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Can you speak?"</span> I‌ ask.` },
      { minionSpeaker:'Rat', text:`<span class='minion-quote'>"Yes!"</span> {{R::gender.he}} squeeks back, <span class='minion-quote'>"No hurt! No kill!"</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I don't want to hurt you, but I do need you to answer some questions for me."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Can you do that for me?"</span>` },
      { text:`I carefully release {{R::gender.him}}‌ but back {{R::gender.him}} up against the wall, making it difficult for {{R::gender.him}} to slip past me if {{R::gender.he}} decides to bolt.` },
      { minionSpeaker:'Rat', text:`{{R::gender.He}} looks up at me fearfully as I‌ tower over {{R::gender.him}}, <span class='minion-quote'>"What do you want?"</span>` },
      { text:`I briefly consider asking {{R::gender.him}} all the very basics; Where are we? What are you?` },
      { text:`But then, perhaps it wouldn't be wise to reveal that I‌ have absolutely no memory or know anything at all about where we are.` },
      { text:`I‌ need to remain cautious.` },
      { text:`I'd rather not reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Let's start simple, what's your name?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."</span>` },
      { text:`{{R::gender.His}} name is a barely pronounceable sequence of squeaks.` },
      { text:`Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`{{R::gender.He}} nods slowly. <span class='minion-quote'>"Abandoned yes, but we live here still, down in the deep dark."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Underneath the keep? Interesting."</span>` },
      { text:`I wrack my brain, trying to remember anything I‌ could about the scaven, their society, what motivates them?` },
      { text:`Nothing.` },
      { text:`I'm going to have to play this by ear and hope for the best.` },
      { text:`Given the nature and state of {{R::gender.his}} dress I can only guess that the scaven have some sort of tribal structure, and that overall they're not doing that well.` },
      { text:`I can use this to my advantage.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Well, it would seem you are in luck then," ‌I say.</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I have come here to claim this keep as my own."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Everything within this place now belongs to me."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I have need of servents though."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I would like for you to return to your chief and let him know that a powerful wizard is now the {{P::character.title}} of this keep."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"If the Deep Hole Scaven serve me, they will become powerful, and feared again."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Understand?"</span>` },
      { text:`{{R::gender.He}} looks me up and down somewhat doubtfully, no doubt noticing that I'm dressed in nothing but some stolen furs.` },
      { text:`To make my point, I‌ reach out feeling for the dry wood in the fireplace and with a dramatic hand motion cause it to burst into flame.` },
      { text:`The rat cowers away from the sudden cascade of sparks and smoke erupting from the fireplace.` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Eek! Yes, yes {{P::character.title}}, I‌ will go tell the chief this."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Good. You may go."</span>` },
      { text:`The scaven sprints from the room, running on all fours.` },
      { text:`As soon as {{R::gender.he}} leaves though I collapse into a nearby chair.` },
      { text:`I'm panting, sweating.` },
      { text:`Heh, some powerful wizard, I can barely use magic at all without almost collapsing.` },
      { text:`I don't know if my gambit will work.` },
      { text:`Only time will tell I suppose.` },
    ]
  }],

  onFinish: async () => {
    await Game.updateLocation('great-hall');
    await EventQueue.enqueueEvent('ambush-rat-receive');
  },

});
