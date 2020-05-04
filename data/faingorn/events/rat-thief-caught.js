Event.build('rat-thief-caught', {

  setting: {
    phase: 'late-night',
    location: 'player-bedroom',
  },

  requires: ['resource.blood-berries>=36'],
  actors: { C:'flag=character.rat-thief' },

  stages:[{
    pages:[
      { text:`A loud rumbling crash wakes me up in the dead of night. I bolt upright out of bead and run out into the
          hall, grinning to myself as I know what that sound portends. The trap has been sprung, the thief is caught.` },
      { text:`I quietly approach the storeroom door. The trap worked as intended, the unstable shelves collapsed onto
          the door, trapping the rat inside. I can hear him, scurrying about inside, trying to move the debris blocking
          the door so that he can escape.` },
      { text:`I didn't intend to lock him in there forever of course, I just needed a loud noise and enough time. If he
          gets the door open now it only makes my task easier.` },
      { text:`It only takes a minute of his desperate scrambling to crack the door open wide enough for him to squeeze
          through and when he does I'm ready for him. He's fast, but not fast enough to escape my invisible grasp.` },
      { text:`With a burst of magical force I grab the scaven and hoist him into the air, leaving him flailing,
          suspended magically in the air before me.` },
    ]
  },{
    requires:`minion(C).is-female`,
    pages:[
      { text:`Now that I get a closer look at her I can see she's actually a little rat girl. Smaller than average,
          even for a scaven, and terribly thin. Her chest is completely flat though. I wouldn't have known she was a
          girl if her failing about in the air didn't flash her pussy at me now and then.` },
    ]
  },{
    requires:`minion(C).is-futa`,
    pages:[
      { text:`Now that I get a closer look at {{him}} I can see {{he}}'s actually a little rat futa. Smaller than
          average, even for a scaven, and terribly thin. {{His}} chest is completely flat though. I wouldn't have known
          {{he}} was a futa if her failing about in the air didn't flash both {{his}} cock and pussy at me now and then.` },
    ]
  },{
    requires:`minion(C).is-male`,
    pages:[
      { text:`As I suspected, he's a a rat boy, small even by scaven standards. It can be difficult to tell with scaven
          sometimes, but his failing about in the air flashes his package at me now and then.` },
    ]
  },{
    pages:[
      { text:`The question is of course what to do with {{him}} now that I've caught {{him}}.` },
      { text:`I could just let {{him}} go I suppose, let {{him}} off with a warning and tell {{him}} to never come into
          the keep again. Rumors would no doubt circulate among the rest of the scaven that I can be a kind
          {{P::character.elf}}.` },
      { text:`I could also kill {{him}}, slowly, painfully. {{His}} screams would echo down into the scaven warrens
          letting them know that I can also be incredibly cruel to those who cross me.` },
      { text:`Another option though would be to recruit {{him}}. {{He}}'s small and terribly thin indicating that
          {{he}}'s probably on the very bottom rung of scaven society. It wouldn't take much for {{him}} to accept me
          as {{his}} new {{P::character.title}}; the promise of food, the occasional blood berry as a reward.` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'action',
    selections:[
      { text:'Let {{him}} go.',           value:'release', effects:['player sadist -1','(Reputation: The Benevolent)']},
      { text:'Torture {{him}} to death.', value:'kill',    effects:['-snuff-','player sadist 3','(Reputation: The Butcher)']},
      { text:'Have {{him}} serve me.',    value:'recruit', effects:['(Reputation: The Seductive)']},
    ]
  }],

  onFinish: async choices => {
    if (choices.action == 'kill') {
      Flag.set('player.scaven-reputations.the-butcher','Y');
      Game.chainEvent('rat-thief-kill',{},choices);
    }
    if (choices.action == 'release') {
      Flag.set('player.scaven-reputations.the-benevolent','Y');
      Game.chainEvent('rat-thief-release',{},choices);
    }
    if (choices.action == 'recruit') {
      Flag.set('player.scaven-reputations.the-seductive','Y');
      Game.chainEvent('rat-thief-recruit',{},choices);
    }
  },

});
