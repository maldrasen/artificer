Event.build('minion-spider-bite', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  location: 'great-hall',

  actors: { 'R':'rat-chief' },

  stages:[{
    pages:[
      { text:`It's still early in the day when I happen to run into {{R::character.firstName}}, the chief of the Deep Hole Rats.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`I notice immediately that something, well striking, has happened to {{R::gender.his}} balls.` },
      { text:`They're huge. {{R::gender.His}} furry little sack has swollen to almost twice it's normal size.` },
      { text:`I'm embarrassed to say that I just can't stop staring at them.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`I notice immediately that something, well striking, has happened to {{R::gender.his}} cunt.` },
      { text:`It's huge. {{R::gender.His}} pussy lips have swollen to at least double their normal size and hang low down {{R::gender.his}} thighs.` },
      { text:`It's far more prominent and external than a pussy ought to be, like a bonobo in heat.` },
      { text:`I'm embarrassed to say that I just can't stop staring at it.` },
    ]
  },{
    pages:[
      { text:`{{R::character.firstName}} notices my gaze and tries to leave the hall, but I motion {{R::gender.his}} over before {{R::gender.he}}'s able to go.` },
      { text:`{{R::gender.He}} sheepishly approaches and I push {{R::gender.his}} hands away so I can get a better look.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"What the hell happened to you?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"The spiderblight {{P::character.title}}."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"They sneak and sting us. You see, they like the soft parts best {{P::character.title}}."</span>` },
      { text:`I nod, still slightly transfixed by the changes that have come over {{R::gender.his}} body.` },
    ]
  },{
    requires:[`minion(R).has-cock`,`player.accepts-men`],
    selectionPage: true,
    selectionKey: 'torment-balls',
    selections:[
      { text:'I kind of want to hurt those big blighted balls.', value:'yes', effects:['R fear 2','player sadist 1']},
      { text:'No, I had better not.', value:'no', effects:['R loyal 1']},
    ]
  },{
    requires:[`minion(R).no-cock`,`player.accepts-women`],
    selectionPage: true,
    selectionKey: 'torment-pussy',
    selections:[
      { text:'I kind of want to hurt that big blighted cunt.', value:'yes', effects:['R fear 2','player sadist 1']},
      { text:'No, I had better not.', value:'no', effects:['R loyal 1']},
    ]
  }],

  onStart: async () => {
    const chief = await CharacterAgent.ratChief();
    const cock = await chief.getCock();
    const pussy = await chief.getPussy();

    if (cock) {
      cock.blightLevel = 3;
      cock.blightCount = 1;
      cock.blightHealing = 0;
      cock.blightPlace = 'balls';
      const describer = new CockDescriber({ character:chief, cock:cock });
      await describer.updateDescription();
    } else {
      pussy.blightLevel = 3;
      pussy.blightCount = 1;
      pussy.blightHealing = 0;
      const describer = new PussyDescriber({ character:chief, pussy:pussy });
      await describer.updateDescription();
    }
  },

  onFinish: async choices => {
    const chief = await CharacterAgent.ratChief();
    const cock = await chief.getCock();
    const pussy = await chief.getPussy();

    if (cock) {
      const never = await Flag.equals('player.fucksMen','never');
      if (choices['torment-balls'] == 'yes') { await EventQueue.enqueueEvent('minion-spider-bite-torment-balls'); }
      if (choices['torment-balls'] == 'no' || never) { await EventQueue.enqueueEvent('minion-spider-bite-normal'); }
    }
    if (pussy) {
      const never = await Flag.equals('player.fucksWomen','never');
      if (choices['torment-pussy'] == 'yes') { await EventQueue.enqueueEvent('minion-spider-bite-torment-pussy'); }
      if (choices['torment-pussy'] == 'no' || never) { await EventQueue.enqueueEvent('minion-spider-bite-normal'); }
    }
  },

});
