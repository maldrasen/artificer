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
      { text:`{{R::gender.His}} name is a barely pronounceable squeak.` },
      { text:`Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`{{R::gender.He}} nods slowly. <span class='minion-quote'>"Abandoned yes, but we live here still, down in the deep dark."</span>` },

    ]
  }],

  onFinish: async () => {

  },

});

// { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>""</span>` },
// { playerSpeaker:true, text:`<span class='player-quote'>""</span>` },
