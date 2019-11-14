Event.build('clear-great-hall-done', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  stages:[
    { pages: [
      { text:`Now that the great hall has been emptied, cleaned, and sanitized I'll start sleeping inside of it.` },
      { text:`It smell was still too great to attempt it last night, but I'd say it almost smells pleasant now, like leather and wood smoke.` },
      { text:`I get a small fire going in the hall's oversized fireplace, just to take a bit of the early morning bite out of the air.` },
      { text:`Almost none of the wood from the furniture was salvageable, but some of it makes decent firewood.` },
      { text:`I gathered all of the iron fittings and nails and such and collected it all in a neat pile in the corner of the hall.` },
      { text:`You never know when you might need some nails and such.` },
      { text:`I don't think I'll be making furniture for myself anytime soon though.` },
      { text:`Given that I'm still naked and sleeping on the floor, I think my next task is to find a way to remedy that.` },
    ]}
  ],

  onFinish: async () => {
    const orgy = await Flag.lookup('history.courtyardRatOrgy');
    const game = await Game.instance();

    await Flag.set('location.currentStudy','great-hall');

    if (orgy) { await AvailableEvent.addAll([
      { code:'got-fleas', requires:`game.dayNumber=${game.dayNumber+2}` },
    ]); }
  },

});
