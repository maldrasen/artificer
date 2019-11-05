Event.build('minion-spider-bite-normal', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',

  actors: { 'R':'rat-chief' },

  stages:[{
    pages:[
      { text:`I don't want to cause {{R::gender.him}} more pain than {{R::gender.he}}'s already obviously in.` },
      { text:`And it's kind of gross looking.` },
      { requires:`minion(R).has-cock`, text:`{{R::gender.His}} massively swollen ballsack has completely ripped open in
          places, resulting in it being covered in numerous lesions and sores all weeping a black viscous pus.` },
      { requires:`minion(R).no-cock`, text:`{{R::gender.His}} massively swollen pussy lips have completely ripped open
          in places, resulting in them being covered in numerous lesions and sores all weeping a black viscous pus.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"You say a spider bite did this?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The spiderblight {{P::character.title}}."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Yes, all the crawling things of the wood carry the blight."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The blight, it changes you."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"It feeds on you."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"But {{R::character.firstName}} is strongest of rats."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"It will go away soon."</span>` },
      { text:`I nod to the rat and wave {{R::gender.him}} off, finally allowing {{R::gender.him}} to scurry out from my presence.` },
      { text:`It's certainly a fascinating disease. ` },
      { text:`I've never seen anything quite like it, well not that can remember in any case.` },
      { text:`Perhaps one of these days, when I have a laboratory set up, I'll be able to investigate further.` },
      { text:`... now there's an odd thought.` },
      { text:`"When I have a laboratory set up?"` },
      { text:`I wasn't even aware I was even planning such a thing, but now that I think about it it just seems natural.` },
      { text:`A wizard and {{P::gender.his}} alchemy laboratory...` },
      { text:`It's something to consider at least.` },
    ]
  }]
});
