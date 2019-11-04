Event.build('make-hide-bedding-done', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',

  stages:[{
    pages:[
      { text:`I've finished preparing enough hides to make a suitable bed.` },
      { text:`Well, it's not much of a bed.` },
      { text:`Nothing but a big pile of hides and furs really.` },
      { text:`Still, after spending {{game|dayNumber}} days sleeping on the dirt or the Great Hall's stone floor this is a dramatic improvement.` },
      { text:`Looking at the pile of furs now it's really rather sad how much effort it took, but I have essentially no tools.` },
      { text:`Just getting all the hides cleaned was a major undertaking.` },
      { text:`Taking care of these meager necessities has to be done though.` },
    ]
  }],


  onFinish: async () => {
    await Flag.set('player.bedsIn','hide');

    const flag = await Flag.lookup('player.dressedIn');
    if (flag) {
      await EventQueue.enqueueEvent('clothed-and-bedded');
    }
  },

});
