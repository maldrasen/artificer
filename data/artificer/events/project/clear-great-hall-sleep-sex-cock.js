Event.build('clear-great-hall-sleep-sex-cock', {
  background: '../../resources/backgrounds/bg-courtyard-ruined-night.png',

  actors: { 'R':'a-sexy-rat' },

  stages:[
    { pages: [
        { text:`I lay down and allow the rats to start cuddling up to me until I'm packed in and surrounded by their furry little bodies.` },
        { text:`As they settle in they begin some tentative fondling and licking of each other, arranging their bodies to align mouths and cocks and pussies whenever possible.` },
    ]},{
      requires:['player.prefers-men-over-women'],
      pages: [
        { text:`I reach out to the two rat boys on either side of me, finding their nipples in their thick fur.` }
    ]},{
      requires:['player.prefers-women-over-men'],
      pages: [
        { text:`I reach out to the two rat girls on either side of me, finding their nipples in their thick fur.` }
    ]},{
      requires:['player.prefers-neither-men-nor-women'],
      pages: [
        { text:`I reach out to the rats on either side of me, finding their nipples in their thick fur.` }
    ]},{
      pages: [
        { text:`I learn that rats have a total of twelve nipples.` },
        { text:`I run my hands up and down their chests, finding each hard thick nub, and give them a firm pinch.` },
        { text:`One of the bolder rat {{R::gender.boys}} starts sliding lower down my chest until I can no longer reach {{R::gender.his}} nipples.` },
        { text:`{{R::gender.He}} starts nuzzling me against my ballsack, which must seem absolutely massive to {{R::gender.him}}, being that I'm so much larger than any of these rats.` },
        { text:`I sigh contently as {{R::gender.he}} starts licking under the sack, licking the day's sweat off my balls.`},
        { text:`A groan as another mouth joins the first.` }
    ]},{
      requires:['player.cock-sheath'],
      pages: [
        { text:`My cock hardens quickly, sliding free from its thick sheath as the two mouths lick and nibble around the opening.` }
    ]},{
      requires:['player.no-cock-sheath'],
      pages: [
        { text:`My cock hardens quickly as the two mouths take position on either side of my cock.` }
    ]},{
      pages: [
        { text:`It's been far too long, and I'm not going to have the patience it takes to just let them play with my dick all night.` },
        { text:`Reaching down I grab the two rat {{R::gender.boys}} by the back of their heads and push them tighter around my cock.` },
        { text:`Their muzzles are small, but they're able to open them wide enough for their lips to finally press together, in a forced kiss around the shaft of my cock.` },
        { text:`I begin rubbing their mouths up and down my shaft.` },
        { text:`I don't think I'd be able to get my entire dick into one of their tiny mouths, but this is close enough.` },
        { text:`Their lips are warm and wet.` },
        { text:`I feel like I'm going to cum far too soon.` },
        { text:`It's been so long though, it's going to be impossible for me to hold back.` },
        { text:`With a groan I pull one of the rats off of my dick and push {{R::gender.his}} face fully onto my cock, stuffing as much of its throbbing head into {{R::gender.his}} mouth as I can.`},
        { text:`My orgasm completely overtakes my body.` },
        { text:`I'm pushing the rat's face down onto my cock with enough force to rip the sides of {{R::gender.his}} mouth open.` },
        { text:`{{R::gender.His}} eyes bulge and his cheeks swell with far more cum than {{R::gender.he}} can swallow.`},
        { text:`Thick white globs of cum begin gushing out of {{R::gender.his}} nose, which my other little cocksucker dutifully starts to lick.` },
        { text:`Finally I feel my orgasm subside and I release the poor little rat.`},
        { text:`I hadn't meant to be that rough, but I couldn't seem to help myself.`},
        { text:`{{R::gender.He}} doesn't seem to have minded the rough treatment though.` },
        { text:`{{R::gender.He}} and the other rat start swapping the overabundance of cum between themselves while another rat starts fucking {{R::gender.him}} roughly from behind.` },
        { text:`Feeling completly spent, I lean back and find a rat to lay my head against.` },
        { text:`It doesn't take long before I'm asleep, using {{R::gender.his}} ass as a pillow, while the rest of the rats continue to fuck all around me.` },
    ]}
  ],

  onFinish: async choices => {
    const game = await Game.instance();
    game.setFlags({
      'history.courtyard-rat-orgy':'yes'
    });
  }

});
