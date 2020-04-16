Event.build('found-blight-spider-torment-balls', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`I reach out and grab {{his}} swollen {{C::balls.apple}} sized balls, roughly pulling {{him}} towards me.
          {{His}} massively swollen balls have completely ripped open in places, resulting in them being covered in
          numerous lesions and sores, all weeping a black viscous pus.` },
      { text:`For them to have grown so much in this short of a time, well it's obviously more than {{his}} body could
          handle. Me squeezing and pulling on them like this obviously isn't helping either, causing {{him}} to grimace
          in pain.` },
      { playerSpeaker:true, text:`"You say a spider bite did this?"` },
      { actorSpeaker:'C', text:`Through gritted teeth {{he}} manages to say, "Yes, the spiderblight
          {{P::character.title}}. All the crawling things of the wood carry the blight. The blight, it changes you. It
          feeds on you. But {{C::character.firstName}} is strong. It will &hellip; go away soon."` },
      { text:`{{He}} starts panting in pain as I squeeze just a bit harder, pushing {{his}} testicles together inside
          of {{his}} ballsack so that they rub against each other. They feel strange, unusually heavy and thick, as
          though filled with something like oatmeal.` },
      { text:`And I swear I felt one of {{his}} balls &hellip; twitch.` },
      { text:`It's parasitic perhaps? {{He}} did mention that the blight feeds on {{him}} as it grows. {{His}} knees
          start to wobble, and I can see that {{he}}'s almost ready to pass out.` },
      { text:`It's a fascinating disease.` },
      { text:`I've never seen anything quite like it, well not that I could remember if I had. It's almost certainly
          magical, and makes me wonder if the spider's blighted venom could be extracted and refined somehow.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}, if you find any more of these spiders while out
          foraging, I'd like for you to bring them back with you. I have the feeling that they might be useful."` },
      { actorSpeaker:'C', text:`{{His}} eyes widen and {{he}} looks like {{he}} might throw up at the thought of
          purposefully having to capture one. I give {{his}} balls another firm squeeze and {{he}} gasps, "Ugh! Yes
          {{P::character.title}}. {{C::character.firstName}} will do this."`, effects:['actor(C) loyal -2', 'actor(C) fear 2']},
      { text:`I finally let {{him}} go and {{he}} collapses on the ground in front of me. I nod to the rat, indicating
          that {{he}}'s dismissed, and {{he}} crawls out of the room as fast as {{he}} can manage in {{his}} current
          state.` },
    ]
  }],

});
