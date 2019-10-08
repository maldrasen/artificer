Event.build('clear-great-hall-sleep-sex-pussy', {
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
        { text:`I slowly spread my legs for {{R::gender.him}}, allowing {{R::gender.him}} access to my cunt.` },
        { text:`I can smell myself.` },
        { text:`I haven't been able to bathe, well ever...` },
        { text:`Having worked all day my pussy is ripe and sweaty.` },
        { text:`The rat doesn't seem to mind though, if anything {{R::gender.he}} seems turned on by it.` },
        { text:`I feel {{R::gender.him}} sniffing all around my crotch, {{R::gender.his}} twitching little nose pressing against my opening.` },
    ]},{
      requires:['player.accepts-men'],
      pages: [
        { text:`Another rat presses his cock up to my lips, and feeling generous, I allow him to press his small hard cock inside of my mouth.` },
        { text:`It would be impossible for him to satisfy me with a dick this small, but it's an interesting sensation, pulling his entire shaft into my mouth.` },
        { text:`I reach out with my tongue and lick him under his small furry sack, pulling his balls into my mouth as well.` },
        { text:`My thick tongue swirling around his entire shaft is probably like nothing he's ever felt before.` },
    ]},{
      requires:['player.accepts-no-men'],
      pages: [
        { text:`Another rat climbs on top of me and straddles my face, pressing her pussy against my lips.` },
        { text:`Her slit is tiny, but dripping wet.` },
        { text:`Given that my tongue is longer and far thicker than any of the cocks she's probably used to, I'd say she's in for a ride.` },
        { text:`I reach around behind her, grabbing her ass and pulling her tightly against my face as my tongue forces its way inside of her.` },
        { text:`She starts to shake in orgasm almost immediately as my tongue finds and flicks her cervix back and forth.` },
    ]},{
      pages: [
        { text:`Reaching down I pull the rat licking my pussy hard against my crotch.` },
        { text:`{{R::gender.He}}'s found my clit, gently sucking on the hard sensitive nub, but I need more...` },
        { text:`I grab {{R::gender.him}} by the back of {{R::gender.his}} head and pull {{R::gender.him}} harder against me until I feel {{R::gender.his}} furry muzzle begin to sink into my pussy.` },
        { text:`I moan, feeling {{R::gender.his}} face spreading me open.` },
    ]},{
      requires:['player.accepts-men'],
      pages: [
        { text:`I start fucking {{R::gender.his}} face hard while the one in my mouth starts fucking my face in turn.` },
    ]},{
      requires:['player.accepts-no-men'],
      pages: [
        { text:`I start fucking {{R::gender.his}} face hard while thrusting my tongue in and out of the squirming rat straddling my face.` },
    ]},{
      pages: [
        { text:`It's been far too long, I can feel my orgasm quickly approaching.` },
        { text:`The rat between my legs starts clawing at the inside of my thighs.`},
        { text:`I'm suffocating {{R::gender.him}}.`},
        { text:`Well tough, {{R::gender.he}} doesn't get to breathe until {{R::gender.he}} earns it.`},
        { text:`I wrap my legs tighter around {{R::gender.his}} struggling form, grinding {{R::gender.his}} face hard againt my cunt.`},
        { text:`If anything {{R::gender.his}} trashing turns me on even more.`},
        { text:`My orgasm completely overtakes my body.` },
        { text:`I groan into the rat filling my mouth.` },
        { text:`My pussy starts to gush, and I want to drown the rat between my legs in my juices.` },
        { text:`Finally my orgasm subsides and I release the poor little rat, letting {{R::gender.him}} collapse in the dirt under me.`}
    ]},{
      requires:['player.accepts-men'],
      pages: [
        { text:`The rat in my mouth starts to cum at the same time.` },
        { text:`I hold him tightly against me, drinking his sperm, which has a slight nutty flavor to it.` },
        { text:`As he pulls his cock free I find myself wanting more.` },
    ]},{
      requires:['player.accepts-no-men'],
      pages: [
        { text:`The rat straddling my face cums again, spraying me in her cunt juices as well.` },
        { text:`I slowly force a finger into her asshole as she cums.` },
        { text:`She completly collapses from the force of her orgasm though and falls off of my face into the dirt next to me.` },
    ]},{
      pages:[
        { text:`I shudder with an orgasmic aftershock.` },
        { text:`It's been too long.` },
        { text:`I hadn't meant to be that rough, but I couldn't seem to help myself.`},
        { text:`{{R::gender.He}} doesn't seem to have minded the rough treatment though.` },
        { text:`After a fit of coughing and panting, catching {{R::gender.his}} breath, {{R::gender.he}} dove right between another rat's legs.` },
        { text:`Feeling completly spent, I lean back and find a rat to lay my head against.` },
        { text:`It doesn't take long before I'm asleep, using {{R::gender.his}} ass as a pillow, while the rest of the rats continue to fuck all around me.` },
    ]}
  ],

  onFinish: async choices => {
    const game = await Game.instance();
    const player = await Player.instance();

    AvailableEvent.addAll([{
      code: (player.species.isFurry) ? 'got-fleas-furry' : 'got-fleas-hair',
      requires:[`game.dayNumber=${game.dayNumber+2}`]}
    ]);

    game.setFlags({'history.courtyard-rat-orgy':'true'});
  }

});
