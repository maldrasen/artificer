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
      { text:`I'm surprised by how wide she's able to open her mouth.` },
    ]
  },{
    requires:['canSuckCock(C,P).mouthFit=impossible'],
    pages:[
      { text:`Even so, there's no way she can wrap her mouth around the thickness of my {{P::cock.twoInch}} wide head.` },
      { text:`I'll have to content myself with her licking, kissing, and nibbling around the ridge of my cock head as her tiny hands stroke up and down the length of my {{P::cock.sixInch}} long shaft.` },
      { text:`Her tongue laps over the lop of my cock occasionally, playfully pressing into the piss slit.`}
    ]
  },{
    requires:['canSuckCock(C,P).mouthFit=painful'],
    pages:[
      { text:`With some obvious strain she opens her mouth as wide as she possibly can and lowers her lips around my {{P::cock.twoInch}} wide cock head.` },
      { text:`I feel my cock jam against the entrance of her throat, but she handles it well.` },
      { text:`There's no way I can press more than my cock head into her mouth though, so she falls into a quick rhythm, keeping her lips pressed together tightly as she pops the head in and out of her mouth.` },
      { text:`Her tiny hands stroke up and down the length of my {{P::cock.sixInch}} long shaft, holding it against her furry chest as she rubs it.` }
    ]
  },{
    requires:['canSuckCock(C,P).mouthFit=comfortable'],
    pages:[
      { text:`She opens wide and lowers her lips around my {{P::cock.twoInch}} wide cock head.` },
      { text:`I feel my cock jam against the entrance of her throat, but she handles it well.` },
      { text:`There's no way I can press more than my cock head into her mouth though, so she falls into a quick rhythm, keeping her lips pressed together tightly as she pops the head in and out of her mouth.` },
      { text:`Her tiny hands stroke up and down the length of my {{P::cock.sixInch}} long shaft, holding it against her furry chest as she rubs it.` }
    ]
  },{
    requires:['state.style=normal','canSuckCock(C,P).mouthFit=impossible'],
    pages:[
      { text:`I soon feel myself getting closer.` },
      { text:`I take {{C::character.firstName's}} head in my hands and start to guide her more forcefully, pressing my cock against her lips so that her mouth opens as wide as she's able around my cock head.` },
      { text:`From her expression, it's obvious that the stretching of her lips is painful, but her hands yank faster along my shaft to encourage me further.` },
      { text:`With a low groan I start to cum, holding her head in place with my cock jammed against her mouth so that she has no choice but to swallow mouthfuls of my cum.`, effects:['actor(C) cum-lover 1']},
    ]
  },{
    requires:['state.style=normal','canSuckCock(C,P).mouthFit!=impossible'],
    pages:[
      { text:`I soon feel myself getting closer.` },
      { text:`I take {{C::character.firstName's}} head in my hands and start to guide her more forcefully, pulling her head down faster and further down onto my cock.` },
      { text:`She starts to make a choked, gagging sound with every thrust, but her hands yank faster along my shaft to encourage me further.` },
      { text:`With a low groan I start to cum, holding her head in place with my cock jammed against her throat so that she has no choice but to swallow mouthfuls of my cum.`, effects:['actor(C) cum-lover 1']},
    ]
  },{
    requires:['state.style=normal'],
    pages:[
      { text:`I finally release her and she falls back onto the pile of furs, cum covering her panting mouth.` },
      { text:`She smiles at me though, perhaps for the first time.` },
      { text:`She leans her head back and scoops the ropes dangling cum up into her wide open mouth.` },
      { text:`I smile back, nodding to let her know she did a good job.` },
      { text:`She seems more comfortable in this role than as a simple servant.` },
      { text:`I'll have to start using her like this more often.` },
      { text:`And perhaps push her limits a bit further as well.` },
    ]
  },{
    requires:['state.style=filthy'],
    pages:[
      { text:'continue with ass licking', effects:['actor(C) perverted 1']}
    ]
  }],

  onFinish: async () => {
  },

});
