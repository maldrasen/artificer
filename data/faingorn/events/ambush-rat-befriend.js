Event.build('ambush-rat-befriend', {

  stages:[{
    pages:[
      { playerSpeaker:true, text:`I relax my arm around the rat's throat just enough to allow {{him}} to breathe and
          speak while still applying enough pressure to let {{him}} know that they're both privileges that I could
          revoke at any moment. "Can you speak?" I ask.` },
      { otherSpeaker:'Rat', text:`"Yes!" {{he}} squeeks back, "No hurt! No kill!"` },
      { playerSpeaker:true, text:`"I don't want to hurt you, but I do need you to answer some questions. Can you do
          that for me?"` },
      { text:`I carefully release {{him}} and push {{his}} back up against the wall, making it difficult for {{him}} to
          slip past me if {{he}} decides to bolt.` },
      { otherSpeaker:'Rat', text:`{{He}} looks up at me fearfully, "What do you want?"` },
      { text:`I briefly consider asking {{him}} all the very basics; Where are we? What are you? But then, perhaps it
          wouldn't be wise to reveal that I have absolutely no memory or know anything at all about where we are.` },
      { text:`I need to remain cautious. I shouldn't reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`"Let's start simple, what's your name?"` },
      { actorSpeaker:'R', text:`"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."` },
      { text:`{{His}} name is a barely pronounceable sequence of squeaks. Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"` },
      { actorSpeaker:'R', text:`{{He}} nods slowly. "Abandoned yes, but we live here still, down in the deep dark."` },
      { playerSpeaker:true, text:`"Underneath the keep? Interesting."` },
      { text:`I wrack my brain, trying to remember anything I could about the scaven, their society, what motivates them?` },
      { text:`Nothing.` },
      { text:`I'm going to have to play this by ear and hope for the best. It's obvious that they live in some sort of
          tribal society. Given the state of {{his}} clothing I can only guess that overall they're not doing that well.` },
      { text:`I can use this to my advantage.` },
      { playerSpeaker:true, text:`"Well, it would seem you are in luck then," I say, "I have come here to claim this
          keep as my own. Everything within this place now belongs to me. I have need of servents though. I would like
          for you to return to your chief and let him know that a powerful wizard is now the {{P::character.title}} of
          this keep."` },
      { playerSpeaker:true, text:`"If the Deep Hole Scaven serve me, they will become powerful, and feared again. Do
          you understand?"`, effects:['actor(R) loyal 1']},
      { text:`{{He}} looks me up and down somewhat doubtfully, noting that I'm dressed in nothing but some stolen furs.
          To make my point, I reach out towards the dry wood in the fireplace and with a dramatic hand motion cause it
          to burst into flame.` },
      { actorSpeaker:'R', text:`The rat cowers away from the sudden cascade of sparks and smoke erupting from the
          fireplace. "Eek! Yes, yes {{P::character.title}}, I will go tell the chief this."` },
      { playerSpeaker:true, text:`"Good. You may go."` },
      { text:`The scaven sprints from the room, running on all fours. As soon as {{he}} leaves though I collapse into a
          nearby chair. I'm panting, sweating. Heh, some powerful wizard, I can barely use magic at all without almost
          collapsing.` },
      { text:`I don't know if my gambit will work. Only time will tell I suppose.` },
    ]
  }],

  onFinish: async choices => {
    Game.setLocation('great-hall');
    Game.chainEvent('ambush-rat-end-1');
  },

});
