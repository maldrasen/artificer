Event.build('morning-1-supplies', {

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
      { text:`In one of the smaller rooms I found an old skinning knife and a small leather bag wrapped up in a big
              bundle of furs. The bag is stuffed with dried fruit and nuts. Perhaps someone had left it there as some
              kind of emergency cache? Maybe some fur trapper making their living out in the nearby wilderness?` },
    ]
  },{
    requires:['flag.events.morning-1=did-supplies'],
    pages:[
      { text:`I'll have to deal with them if they return for their goods, but I'm taking them for now. Dried fruit and
              nuts will hardly suffice though, and so before doing anything else I go in search of some more food.` }
    ]
  },{
    requires:['flag.events.morning-1=did-both'],
    pages:[
      { text:`I'll have to deal with them if they return for their goods, but I'm taking them for now. But least I've
              managed to find food, water, clothing, and shelter; and so I return to the keep's great hall to decide
              what to do from there.` }
    ]
  }],

  onFinish: async choices => {
    if (Flag.lookup('events.morning-1') == 'did-supplies') {
      Flag.set('events.morning-1','did-both');
      Game.chainEvent('morning-1-food');
    } else {
      Game.chainEvent('morning-1-work');
    }
  },

});
