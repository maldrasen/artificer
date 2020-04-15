Event.build('morning-1', {
  location: 'courtyard',
  background:{ location:'courtyard', time:'morning' },

  stages:[{
    pages:[
      { text:`I wake up early the next morning. I'm surprised that I could sleep at all given the constant howling
              wind.` },
      { text:`After gathering wood for a fire I decided to sleep out in the courtyard. With the fire warming my body,
              sleeping nude under the stars just felt right, and an overgrown patch of long grass was certainly more
              comfortable than a hard stone floor.` },
      { text:`The remains of my fire sit smoldering a few feet away from me. I stretch and yawn. A cold shiver runs
              through my body, reminding me that clothing will become a necessity soon.` },
      { text:`Food and water as well of course. I still haven't eaten anything and in these early morning hours I'm
              feeling particularly famished.` },
      { text:`I stoke the fire back to life and contemplate my situation. What should be done first?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'task',
    selections:[
      { text:`Scavenge the keep for supplies.`, value:'supplies' },
      { text:`Search for some food and water.`, value:'food' },
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(`morning-1-${choices.task}`);
  },

});
