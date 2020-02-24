Event.build('found-blight-spider', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`It's still early in the day when {{C::character.firstName}} returns from {{C::gender.his}} foraging.` },
      { text:`It's too early in fact.` }
    ]
  },{
    requires:`minion(C).has-cock`,
    pages:[
      { text:`But then I notice that something, well striking, has happened to {{C::gender.his}} balls.` },
      { text:`They're huge. {{C::gender.His}} furry little sack has swollen to almost twice it's normal size.` },
      { text:`Large enough that {{C::gender.his}} little loincloth does nothing to cover it up at all.` },
      { text:`I'm embarrassed to say that I just can't stop staring at them.` },
    ]
  },{
    requires:`minion(C).no-cock`,
    pages:[
      { text:`But then I notice that something, well striking, has happened to {{C::gender.his}} cunt.` },
      { text:`It's huge. {{C::gender.His}} pussy lips have swollen to at least double their normal size and hang low down {{C::gender.his}} thighs.` },
      { text:`It's far more prominent and external than a pussy ought to be, like a bonobo in heat.` },
      { text:`Large enough that {{C::gender.his}} little loincloth does nothing to cover it up at all.` },
      { text:`I'm embarrassed to say that I just can't stop staring at it.` },
    ]
  },{
    pages:[
      { text:`{{C::gender.He}} sheepishly approaches me saying, "Ahh sorry {{P::character.title}}. I had to stop today."` },
      { text:`{{C::gender.His}} hands drop down to cover {{C::gender.him}}self up, but I push {{C::gender.his}} hands away so I can get a better look.` },
      { playerSpeaker:true, text:`"What the hell happened to you?"` },
      { actorSpeaker:'C', text:`"The spiderblight {{P::character.title}}."` },
      { actorSpeaker:'C', text:`"They sneak and sting us&hellip; and they like the soft parts best."` },
      { text:`I nod, still slightly transfixed by the changes that have come over {{C::gender.his}} body.` },
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

  // TODO: This can't be the real way that we add injuries. The abusers need
  //       to be able to add injuries that aren't coming from hazards.
  onFinish: async choices => {
    const state = { priority:'next', actors:{ C:choices.event.actorIDs.C }};
    const character = await Character.lookup(choices.event.actorIDs.C);
    const cock = await character.getCock();
    const pussy = await character.getPussy();

    if (cock) {
      cock.blightLevel = 3;
      cock.blightCount = 1;
      cock.blightHealing = 0;
      cock.blightPlace = 'balls';

      await cock.save();
      await (new CockDescriber({ character:character, cock:cock })).updateDescription();

      choices['torment-balls'] == 'yes' ?
        (await EventQueue.enqueueEvent('found-blight-spider-torment-balls',state)):
        (await EventQueue.enqueueEvent('found-blight-spider-normal',state));
    }
    else {
      pussy.blightLevel = 3;
      pussy.blightCount = 1;
      pussy.blightHealing = 0;

      await pussy.save();
      await (new PussyDescriber({ character:character, pussy:pussy })).updateDescription();

      choices['torment-pussy'] == 'yes' ?
        (await EventQueue.enqueueEvent('found-blight-spider-torment-pussy',state)):
        (await EventQueue.enqueueEvent('found-blight-spider-normal',state));
    }
  },

});
