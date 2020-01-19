Event.build('ambush-rat-end-2', {
  background:{ location:'great-hall' },

  stages:[{
    requires:['player.never-fucks-men'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of tits and cunts drifting through my head.` }]
  },{
    requires:['player.never-fucks-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and balls drifting through my head.` }]
  },{
    requires:['player.accepts-men','player.accepts-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and cunts drifting through my head.` }]
  },{
    pages: [
      { text:`{{R::gender.His}} name is {{R::character.name}}` }
    ]
  }],

  onFinish: async () => {
    // Change day
    // Change minion type.
    // game.time = 'morning';
    // game.dayNumber += 1;
  },

});
