Event.build('morning-2', {
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`I sleep soundly, still exhausted from the previous day, but in the early morning hours I'm suddenly awoken.` },
      { text:`Again, the strong sensation that I'm being watched.` },
      { text:`I sit up and quickly look around.` },
      { text:`Nothing.` },
      { text:`At least nothing that I can see or hear.` },
      { text:`I'm certain that I'm not alone here though.` },
      { text:`I need to find out what else is living here with me.` },
      { narratorSpeaker:true, text:`Some events will occur in other rooms, use the map to travel throughout the keep.` },
    ]
  }],

  onFinish: async () => {
    await EventQueue.enqueueEvents([
      { code:'ambush-rat-setup' },
      { code:'looking-outside-1' },
    ]);
  },

});
