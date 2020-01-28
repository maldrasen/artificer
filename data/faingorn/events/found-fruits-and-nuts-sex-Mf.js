Event.build('found-fruits-and-nuts-sex-Mf', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { playerSpeaker:true, text:`<span class='player-quote'>"Now then, let me show you how else I expect you to serve me&hellip;"</span>` },
      { text:`Reaching down I tug my loincloth to the side, fully exposing my still soft cock to her.` },
      { text:`She looks down at my dick, eyes widening.` },
      { text:`Though I'm really only of an average size, I'm still much bigger than the average scaven and must look absolutely humongous to her.` },
      { minionSpeaker:'{{C::character.firstName}}', text:`She nods slowly, <span class='minion-quote'>"I understand {{P::character.title}},"</span> and begins to remove what little clothing she has.` },
      { text:`Soon, she stands nude in front of me, looking away.` },
      { text:`Again I'm impressed with her lythe, muscular body.` },
    ]
  },{
    requires:['minion(C).has-bigger-than-zero-tits'],
    pages:[
      { text:`She doesn't look to have an ounce of fat on her, except for her tits perhaps.` },
      { text:`They barely count though being as small as they are.` },
      { text:`I'd barely notice them at all if it wern't for her prominent {{C::nipples.length}} long nipples.` },
    ]
  },{
    requires:['minion(C).has-zero-tits'],
    pages:[
      { text:`She doesn't look to have an ounce of fat on her.` },
      { text:`Even her chest is perfectly flat except for her prominent {{C::nipples.length}} long nipples.` },
    ]
  },{
    pages:[
      { text:`She seems nervous, perhaps worried that I'm about to force a good {{P::cock.sixInches}}‌ worth of cock into her.` },
      { text:`I should take this slowly though, I wouldn't want to kill her the first time we have sex after all.` },
      { text:`I reach out and take her by the back of the head, pulling her closer while guiding her face towards my cock.` },
      { text:`Understanding where I'm going with this, she assumes a kneeling position between my legs and dutifully begins to lick the top and sides of my growing member.` },
      { text:`Using her tongue and small hands she quickly brings my shaft to its full height.` },
      { text:`She's skilled.` },
      { text:`And now that my cock is in her mouth she's a bit more enthusiastic, licking and kissing all around the head.`, effects:['actor(C) oral-slut 1']},
      { text:`It's obvious she's done this before.` },
      { text:`I wonder if most scaven women are like her, or if she's uniquely qualified for this.` },
    ]
  },{
    requires:['canSuckCock(C,P).mouthFit=impossible'],
    pages:[{
      text:'cannot fit my cock.'
    }]
  },{
    requires:['canSuckCock(C,P).mouthFit=painful'],
    pages:[{
      text:'painfully fit my cock.'
    }]
  },{
    requires:['canSuckCock(C,P).mouthFit=comfortable'],
    pages:[{
      text:'comfortably fit my cock.'
    }]
  }],

  // Actually scaven mouths are slightly larger than humans...
  // If cock can comfortably fit - then deep blowjob
  // If cock can painfully fit - then forced shallow blowjob

  // requires:['state.style=normal'],
  // requires:['state.style=filthy'],

  onFinish: async () => {
  },

});
