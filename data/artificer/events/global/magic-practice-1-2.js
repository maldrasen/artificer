Event.build('magic-practice-1-2', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',

  stages:[{
    pages:[
      { text:`I decide to do something a little more practical for today's practice.` },
      { text:`I found a stone out in the courtyard, brought it into the Great Hall, and set it before me.` },
      { text:`It's a fairly large stone, about the size of a grapefruit, and is unusually round and smooth.` },
      { text:`Sitting on the floor, I again close my eyes and 'reach out' to the stone, examining it with nothing but my magical senses.` },
      { text:`Cool. Heavy. Solid.` },
      { text:`Although I carried it in here and know full well what it weighs, I feel like I can sense its weight as well.` },
      { text:`I open my eyes again and slowly lift it into the air, making it hover a foot or so off of the floor.` },
      { text:`What am I feeling when I'm doing this?` },
      { text:`I feel the rock, as much as I was when it was just sitting on the floor.` },
      { text:`Around the rock is a force.` },
      { text:`The force is formless though.` },
      { text:`It has no shape, no real presence.` },
      { text:`I'm creating the force, but it's not emanating from me, it simply is.` },
      { text:`It's pushing the rock up from below, but also pulling it up from above.` },
      { text:`Just holding it here takes effort though.` },
      { text:`I find myself breathing harder.` },
      { text:`Holding the rock up in the air like this feels like holding it in my arms.` },
      { text:`I try lifting it higher.` },
      { text:`Lifting it, lowering it. Lifting it, lowering it.` },
      { text:`There's no burning sensation in my muscles but my heart rate is up, my breathing is heavy.` },
      { text:`Finally, I let the rock drop back down to the ground.` },
      { text:`I'm dripping with sweat.` },
      { text:`I had expected this.` },
      { text:`Doing something magically takes about the same effort as it takes to do something physically.` },
      { text:`Nothing comes for free I suppose.` },
      { text:`Something within me is doing this, but this thing needs energy just like everything else.` },
      { text:`And for a biological creature like myself, that energy is food.` },
      { text:`Speaking of which, it's past time that I should make breakfast.` },
      { text:`I'll leave the rock here though for tomorrow's practice.` },
    ]
  }],

  onFinish: async () => {
    const game = await Game.instance();
    AvailableEvent.add({
      code:'magic-practice-1-3',
      requires:`game.dayNumber=${game.dayNumber+3}`
    });
  },

});
