Event.build('morning-1-food', {
  background:{ location:'ruined-tower', time:'morning' },

  stages:[{
    requires:['no-flag.enqueued.morning-1-supplies'],
    pages:[
      { text:`The rumbling in my stomach informs me that food is my first priority.` },
      { text:`However, this land is barren and foraging will be difficult and time consuming.` },
      { text:`Birds though&hellip; I glance up at the keep's single tall tower encircled about by numerous small flying
              shapes. Already the thought of a roasted bird has my mouth watering.` },
      { text:`I'll need to make my way through the keep and up into it's tower first though. I need to be cautious.
              There's not telling what I may find within.` },
      { text:`Later&hellip;`,  background:{ code:'black' }},
    ]
  },{
    pages:[
      { text:`It doesn't take too long for me to find my way into the keep's tower.` },
      { text:`It's condition is much as I expected it would be. With the roof having collapsed numerous birds have been
              nesting among the exposed rafters; and probably have been for decades given the two inch deep bird shit
              that covers every surface up here.` },
      { text:`Disgusting doesn't even begin to describe the scent, though it's still not enough to put a dent in my
              hunger.` },
      { text:`The birds, almost all ravens, squawk loudly at my presence.` },
      { text:`I can't say why, but something about these birds stir a remembrance in me. They bring to mind thoughts of
              death, forbidden secrets, and of power.` },
      { text:`Would it be a betrayal, killing and eating one of these birds?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'kill',
    selections:[
      { text:`Of course not. Why should I care for these birds?`, value:'yes' },
      { text:`Perhaps it would be. I will let them live.`, value:'no' },
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(choices.kill == 'yes' ? 'morning-1-food-raven' : 'morning-1-food-mushrooms');
  },

});
