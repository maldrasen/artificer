Event.build('make-hide-bedding-done', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  stages:[{
    pages:[
      { text:`TODO: Make hide bedding done.` },
    ]
  }],

  onFinish: async () => {
    let game = await Game.instance();
    await game.setFlags({ 'player.bedsIn':'hide' });
  },

});
