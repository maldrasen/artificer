Event.build('morning-2', {

  setting: {
    phase: 'wake',
    location: 'great-hall'
  },

  stages:[{
    pages:[
      { text:`I sleep soundly, still exhausted from the previous day. In the early morning hours though I wake suddenly
              with the strong sensation that I'm being watched.` },
      { text:`I bolt upright and take a quick look around.` },
      { text:`Nothing.` },
      { text:`Nothing that I can see or hear at least.` },
      { text:`I cautiously get up off of my fur pile and pull my clothes on, watching for any signs of movement. It's
              only after I've checked the dark shadows of the room and under the tables that I'm satisfied that I'm
              truly alone.` },
      { text:`Perhaps I'm just being paranoid, although as I make my way down the hall towards the bath I spot a
              footprint in the dust. Small. Animal like. Maybe {{inches|4}} in length. I can't say for certain that it
              wasn't there yesterday, but it does look fresh.` },
      { text:`It's enough for me. I'm not alone here.` },
    ]
  }],

  onFinish: async () => {
    await AvailableEvent.add('ambush-rat-setup');
    await AvailableEvent.add('looking-outside-1');
  },

});