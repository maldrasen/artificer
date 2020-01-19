Event.build('ambush-rat-end-2', {
  location: 'great-hall',

  background:{ location:'great-hall' },
  actors:{ R:'any-scaven' },

  stages:[{
    requires:['player.never-fucks-men'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of tits and cunts drifting through my head.` }]
  },{
    requires:['player.never-fucks-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and balls drifting through my head.` }]
  },{
    requires:['player.accepts-men','player.accepts-women'],
    pages: [{ text:`Eventually I drift off to sleep, thoughts of cocks and cunts drifting through my head.` }]
  }],

  onFinish: async () => {
    // Change day
    // Change minion type.
    // game.time = 'morning';
    // game.dayNumber += 1;
  },

});
