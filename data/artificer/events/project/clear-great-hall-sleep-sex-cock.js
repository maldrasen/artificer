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
        { text:`I sigh contently as {{R::gender.he}} starts licking under the sack, licking the day's sweat off my balls.`}
      ]
    }
  ]

});
