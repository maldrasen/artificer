Event.build('clothed-and-bedded', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',

  stages:[{
    pages:[
      { text:`Now that I'm somewhat clothed and have a place to sleep it's time to start expanding my base of operations here.` },
      { text:`It might be a good time to take stock of my situation as well.` },
      { text:`It doesn't matter what angle I look at it from though, I'm trapped here.` },
      { text:`Getting past the abominations that lurk just outside the walls will take more than half a dozen rats or so.` },
      { text:`Hell, I don't even know enough about them to know what it would take.` },
      { text:`I have a secure keep, and I have minions.` },
      { text:`I can work with that.` },
      { text:`I think making this place as livable as possible should be my next priority.` },
      { text:`I'll start with clearing the keep's upper floors and I'll work my way downward.` },
      { text:`I should start sending my rats out to gather the materials I know I'll need too.`, alert:{ unlock:'Missions' }},
      { text:`Food will still a necessity of course, but in time I'll need wood, stone, and metal to turn this ruin into an actual dwelling.` },
    ]
  }],

  onFinish: async () => {
    await Flag.set('minion.missions','unlocked');
    await AvailableProject.addAll([{ code:'clear-upper-keep' }]);
  },

});
