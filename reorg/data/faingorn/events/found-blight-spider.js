Event.build('found-blight-spider', {

  setting: {
    phase: 'after-work',
    location: 'great-hall',
  },

  stages:[{
    pages:[
      { text:`It's still early in the day when {{C::character.firstName}} returns from {{his}} foraging.` },
      { text:`It's too early in fact.` }
    ]
  },{
    requires:`minion(C).has-cock`,
    pages:[
      { text:`But then I notice that something, well striking, has happened to {{his}} balls. They're huge. {{His}}
          furry little sack has swollen to almost twice it's normal size. Large enough that {{his}} small loincloth
          does nothing to cover it up at all.` },
      { text:`I'm embarrassed to say that I just can't stop staring at them.` },
    ]
  },{
    requires:`minion(C).no-cock`,
    pages:[
      { text:`But then I notice that something, well striking, has happened to {{his}} cunt. It's huge. {{His}} pussy
          lips have swollen to at least double their normal size and hang low down {{his}} thighs. It's far more
          prominent and external than a pussy ought to be, like a bonobo in heat. Large enough that {{his}} small
          loincloth does nothing to cover it up at all.` },
      { text:`I'm embarrassed to say that I just can't stop staring at it.` },
    ]
  },{
    pages:[
      { actorSpeaker:'C', text:`{{He}} sheepishly approaches me saying, "Ahh sorry {{master}}. I had to stop today."
          {{His}} hands drop down to cover {{him}}self up, but I push {{his}} hands away so I can get a better look.` },
      { playerSpeaker:true, text:`"Holy fuck. What the hell happened to you?"` },
      { actorSpeaker:'C', text:`"The spiderblight {{master}}. They sneak and sting us&hellip; and they like the soft
          parts best." I nod, still transfixed by the changes that have come over {{his}} body.` },
    ]
  },{
    requires:[`minion(C).has-cock`,`player.accepts-men`],
    selectionPage: true,
    selectionKey: 'torment-balls',
    selections:[
      { text:'I kind of want to hurt those big blighted balls.', value:'yes', effects:['player sadist 1']},
      { text:'No, I had better not.', value:'no' },
    ]
  },{
    requires:[`minion(C).no-cock`,`player.accepts-women`],
    selectionPage: true,
    selectionKey: 'torment-pussy',
    selections:[
      { text:'I kind of want to hurt that big blighted cunt.', value:'yes', effects:['player sadist 1']},
      { text:'No, I had better not.', value:'no' },
    ]
  }],

  onFinish: async choices => {
    const character = await Character.lookup(choices.event.actorIDs.C);
    const cock = await character.getCock();
    const pussy = await character.getPussy();

    if (cock) {
      Abuser.addCockInjury(character, { type:'blight', level:3, details:{ place:'balls' }});
      Game.chainEvent(choices['torment-balls'] == 'yes' ?
        'found-blight-spider-torment-balls':
        'found-blight-spider-normal');
    } else {
      Abuser.addPussyInjury(character, { type:'blight', level:3 });
      Game.chainEvent(choices['torment-pussy'] == 'yes' ?
        'found-blight-spider-torment-pussy':
        'found-blight-spider-normal');
    }
  },

});
