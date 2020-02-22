Event.build('found-blight-spider-normal', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`I don't want to cause {{C::gender.him}} more pain than {{C::gender.he}}'s already obviously in.`, effects:['actor(C) loyal 1']},
      { text:`&hellip;and it's kind of gross looking.` },
      { requires:`minion(C).has-cock`, text:`{{C::gender.His}} massively swollen balls have completely ripped open in places, resulting in them being covered in numerous lesions and sores, all weeping a black viscous pus.` },
      { requires:`minion(C).no-cock`, text:`{{C::gender.His}} massively swollen pussy lips have completely ripped open in places, resulting in them being covered in numerous lesions and sores, all weeping a black viscous pus.` },
      { text:`For them to have grown so much in this short of a time, well it's obviously more than {{C::gender.his}} body could handle.` },
      { playerSpeaker:true, text:`"You say a spider bite did this?"` },
      { actorSpeaker:'C', text:`"The spiderblight {{P::character.title}}."` },
      { actorSpeaker:'C', text:`"Yes, all the crawling things of the wood carry the blight."` },
      { actorSpeaker:'C', text:`"The blight, it changes you."` },
      { actorSpeaker:'C', text:`"It feeds on you."` },
      { actorSpeaker:'C', text:`"But {{C::character.firstName}} is strong."` },
      { actorSpeaker:'C', text:`"It will go away soon."` },
      { text:`It's a fascinating disease.` },
      { text:`I've never seen anything quite like it, well not that I could remember if I had.` },
      { text:`It's almost certainly magical, and makes me wonder if the spider's blighted venom could be extracted and refined somehow.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}, if you find any more of these spiders while out foraging, I'd like for you to bring them back with you."` },
      { playerSpeaker:true, text:`"I have the feeling that they might be useful."` },
      { actorSpeaker:'C', text:`{{C::gender.His}} eyes widen at the thought, but {{C::gender.he}} nods, "I will do this."` },
      { requires:`minion(C).has-cock`, text:`I nod to the rat and wave {{C::gender.him}} off, finally allowing {{C::gender.him}} to scurry out of my presence so that {{C::gender.he}} can go and tend to {{C::gender.his}} sore balls.` },
      { requires:`minion(C).no-cock`, text:`I nod to the rat and wave {{C::gender.him}} off, finally allowing {{C::gender.him}} to scurry out of my presence so that {{C::gender.he}} can go and tend to {{C::gender.his}} sore pussy.` },
    ]
  }],

});
