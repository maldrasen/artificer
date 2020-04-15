Event.build('morning-1-supplies', {
  background:{ location:'empty-room', time:'morning' },

  stages:[{
    pages:[
      { text:`I spend some time searching the keep's two lower floors for supplies. I'd say they're in fairly good
              shape. They've been sheltered from the elements at least. There are debris, piles of animal bones and
              scat, but at least it's dry.` },
      { text:`What was once the great hall could be made comfortable again I think. There's a large fireplace and even
              some intact furniture. Large, sturdy dining tables and chairs mostly.` },
      { text:`It's obvious that the place has already been completely picked over by other scavengers though. Rooms
              that were closed up and dry lie almost completely empty. I did manage to find some supplies though, which
              in truth is a bit odd.` },
      { text:`In one of the smaller rooms someone had hidden a small leather bag stuffed with dried fruit and nuts
              placed upon a large pile of furs. If I had to guess it looks like someone had left it there as some kind
              of emergency cache, perhaps some fur trapper making their living out in the nearby wilderness?` },
    ]
  },{
    requires:['no-flag.enqueued.morning-1-food'],
    pages:[
      { text:`I'll have to deal with them if they return for their goods, but I'm taking them for now. Dried fruit and
              nuts will hardly suffice though, and so before doing anything else I go in search of some more food.` }
    ]
  },{
    requires:['flag.enqueued.morning-1-food'],
    pages:[
      { text:`I'll have to deal with them if they return for their goods, but I'm taking them for now. But least I've
              managed to find food, water, clothing, and shelter; and so I return to the keep's great hall to decide
              what to do from there.` }
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(Flag.lookup('enqueued.morning-1-food') ? 'morning-1-end' : 'morning-1-food');
  },

});
