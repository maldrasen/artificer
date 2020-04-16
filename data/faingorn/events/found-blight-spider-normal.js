Event.build('found-blight-spider-normal', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`No, I don't want to cause {{him}} more pain than {{he}}'s already obviously in.`, effects:['actor(C) loyal 1']},
      { text:`&hellip;and it's kind of gross looking.` },
      { requires:`minion(C).has-cock`, text:`{{His}} massively swollen balls have completely ripped open in places,
          resulting in them being covered in numerous lesions and sores, all weeping a black viscous pus.` },
      { requires:`minion(C).no-cock`, text:`{{His}} massively swollen pussy lips have completely ripped open in places,
          resulting in them being covered in numerous lesions and sores, all weeping a black viscous pus.` },
      { playerSpeaker:true, text:`For them to have grown so much in this short of a time, well it's obviously more than
          {{his}} body could handle. "You say a spider bite did this?"` },
      { actorSpeaker:'C', text:`"Yes, the spiderblight {{P::character.title}}. All the crawling things of the wood
          carry the blight. The blight, it changes you. It feeds on you. But {{C::character.firstName}} is strong. It
          will go away soon."` },
      { text:`It's a fascinating disease.` },
      { text:`I've never seen anything quite like it, well not that I could remember if I had. It's almost certainly
          magical, and makes me wonder if the spider's blighted venom could be extracted and refined somehow.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}, if you find any more of these spiders while out
          foraging, I'd like for you to bring them back with you. I have the feeling that they might be useful."` },
      { actorSpeaker:'C', text:`{{His}} eyes widen at the thought, but {{he}} nods, "{{C::character.firstName}} will do
          this."` },
      { requires:`minion(C).has-cock`, text:`I nod to the rat and wave {{him}} off, finally allowing {{him}} to scurry
          out of my presence so that {{he}} can go and tend to {{his}} sore balls.` },
      { requires:`minion(C).no-cock`, text:`I nod to the rat and wave {{him}} off, finally allowing {{him}} to scurry
          out of my presence so that {{he}} can go and tend to {{his}} sore pussy.` },
    ]
  }],

});
