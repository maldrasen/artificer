Event.build('rat-thief-kill-mount', {

  actors: {
    C: 'flag=character.rat-thief',
    R: 'flag=character.first-scaven',
  },

  stages:[{
    pages:[
      { playerSpeaker:true, text:`"Yes," I say to myself, "something  &hellip; dramatic is called for I think."` },
      { text:`I throw the limp rat over my shoulder and carry {{him}} out to the courtyard. {{He}}'s only out for a
          short while though and starts to stir again as I start to strip {{his}} ragged clothing off of {{him}}.` },
      { text:`{{He}} struggles weakly as I lift {{him}} back up, but {{he}}'s obviously still sluggish and a bit
          confused. Unsure of why {{he}}'s outside and why {{he}}'s naked.` },
      { text:`I don't think {{he}}'s noticed the statue behind {{him}} either. The stone horse, rearing upwards while
          being impaled from below by a massive, tree trunk thick, tentacle.` },
      { text:`The horse statue is a little larger than life size, and it's cock perhaps even a little larger still.
          It's at least {{threeFeet}} long with thick veins carved into it's stone skin. Longer even than the thief is
          tall.` },
    ]
  },{
    requires:['minion(C).has-cock'],
    pages:[{ text:`I grip {{him}} firmly by waist then with a grunt I slam {{him}} down on the stone cock's wide flat
      head. {{He}} grunts in shock then lets out a high pitched cry as {{his}} balls are crushed by the impact.`
    }]
  },{
    requires:['minion(C).is-female'],
    pages:[{ text:`I grip {{him}} firmly by waist then with a grunt I slam {{him}} down on the stone cock's wide flat
      head. She grunts in shock then lets out a high pitched cry as her cunt is crushed by the impact.`
    }]
  },{
    pages:[
      { text:`It's going to take a lot more force than that though to get the statue's cock inside of {{him}}. I pull
          {{him}} back again, holding {{his}} quivering body over my head as I prepare to bring {{him}} down again.
          {{His}} legs are flailing out in the air behind {{him}} as {{he}} tries to find some way to protect
          {{him}}self or twist away somehow.` },
      { text:`It's all futile though. There's no way for {{him}} to really shield {{his}} ass as I slam {{him}} down
          onto the stone horsecock. {{He}} cries out in pain. It feels like I really ripped something open this time.` },
    ]
  },{
    requires:['minion(C).has-cock'],
    pages:[{ text:`I grunt with effort as I push {{his}} slender body down onto the flat head of the statue's cock.
      {{He}} screams, louder than I thought possible. Rivets of blood begin to drip down the light gray stone as {{his}}
      ass is completely ripped open.`
    }]
  },{
    requires:['minion(C).is-female'],
    pages:[{ text:`I grunt with effort as I push her slender body down onto the flat head of the statue's cock. She
      screams, louder than I thought possible. Rivets of blood begin to drip down the light gray stone as her pussy is
      completely ripped open, the once tight hole splitting in the back to join with her asshole.`
    }]
  },{
    pages:[
      { text:`I feel {{his}} hips expand slightly to accommodate the width of the stone cock. Scavens are able to
          compress their skeletons, an ability that lets them crawl through incredibly tight spaces, but that also
          allows them to expand in situations like this that would otherwise split their pelvis in two.` },
      { text:`Now that the horsecock is fully embedded in {{his}} ass I begin to rock {{his}} body back and forth,
          fucking {{him}} on top of that impaling cock, letting the blood pouring out of {{his}} ass lubricate the
          statue's cock.` },
      { text:`{{He}}'s unable to scream for very long. Fully in shock now {{he}} gasps for breath as {{his}} hands
          reach down to grab {{his}} bulging stomach, feeling the head of the cock as slides up and down inside of
          {{him}}.` },
      { text:`Scavens are also surprisingly tough. Well, they're hard to kill at least. They're able to live through
          injuries that would kill most any other animal. I grab {{him}} by {{his}} legs and savagely yank {{him}}
          downwards. The head of the horsecock is just below {{his}} sternum, spreading {{his}} ribs apart as it
          penetrates {{him}} even further.` },
      { text:`The stone dick has ripped through {{his}} gut, into {{his}} body cavity, and must be pushing {{his}}
          heart and lungs aside, and while {{he}} looks like {{he}}'s in incredible pain, {{he}}'d probably be able to
          survive even this for a time.` },
      { text:`A mind close to death does some interesting things though. Pain turns into pleasure as the mind floods
          itself with endorphins. I'm yanking {{his}} body forcefully up and down the stone shaft, embedding it deeper
          with each thrust, and yet the rat with {{his}} head lolling to one side, looks like {{he}}'s enjoying
          {{him}}self.` },
      { text:`I move my hands up to {{his}} shoulders and push down hard. {{His}} neck bulges as the horsecock enters
          {{his}} throat, and then I feel {{his}} whole body start to shudder. {{He}}'s cumming.` },
    ]
  },{
    requires:['minion(C).has-cock'],
    pages:[{ text:`I glance down at {{his}} small cock, hard and spurting forth one final time. With a sadistic grin I
      reach down and grab {{his}} cock and furry ballsack in my hands and pull down hard one last time. {{His}} mouth
      opens incredibly wide as the bloody head of the statue's horsecock forces its way out.`
    }]
  },{
    requires:['minion(C).is-female'],
    pages:[{ text:`I glance down and see that her fingers are quickly rubbing her clit, jutting out hard atop her
      ruined pussy. I keep pushing though even as she cums from the full body penetration. Her mouth opens incredibly
      wide as the bloody head of the statue's horsecock forces its way out.`
    }]
  },{
    pages:[
      { text:`With the horsecock completely filling {{his}} neck {{he}} quickly passes out, and though {{he}}'d
          eventually die from all the internal bleeding and damage to {{his}} organs and such, it's the suffocation
          that will kill {{him}} first.` },
      { text:`I watch the impaled scaven as {{his}} body twitches, dying and cumming at the same time. Finally {{he}}
          grows still and I step back to admire the new addition to the courtyard's central statue.` },
      { text:`If my intent was to send a warning to would be thieves, this ought to do it. As I start walking back
          towards the keep I see a shadow quickly dart across the wall far above.` },
      { text:`{{R::character.firstName}} must have been watching me. Well, that's fine. {{R::gender.He}} should
          understand too what happens to those who cross me.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('character.rat-thief',null);

    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
