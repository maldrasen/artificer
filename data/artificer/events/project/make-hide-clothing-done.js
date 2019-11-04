Event.build('make-hide-clothing-done', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  stages:[{
    pages:[
      { text:`TODO: Make hide clothing done.` },
    ]
  }],

  onFinish: async () => {
    let game = await Game.instance();
    await game.setFlags({ 'player.dressedIn':'hide' });
  },

});
