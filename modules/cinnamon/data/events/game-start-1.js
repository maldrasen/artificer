Event.build('game-start-1', {

  noSettingCard: true,
  setting: {
    phase: 'early',
  },

  stages:[{
      formPage: 'warning-form'
    },{
      background:'introduction',
      pages: [
        { text:`Welcome to Artificer, Book One. This game is the prototype version of what will eventually be a larger
            and more story rich game. This version really just focuses on the sex scenes and leaves out most of the
            messy plot stuff.` },
        { text:`In this game you play the part of an artificer, a wizard who specializes in building wondrous devices,
            enchantments, and even the shaping of flesh and minds. Almost unlimited resources and power will be at your
            disposal. The catch is that you must use your power to keep a court of demons entertained. Their particular
            tastes in entertainment tend to lean towards the hideous, horrifying, sadistic, and most of all sexual.` },
        { text:`That said, let us first establish the character you will be playing.` },
      ]
    },{
      background: null,
      formPage: 'name-and-gender-form'
    },{
      formPage: 'sexuality-form'
    }
  ],

  onFinish: async choices => {
    choices.species = 'human';

    Flag.setAll({
      'player.fucks-men'   : choices.men,
      'player.fucks-women' : choices.women,
      'player.fucks-futas' : choices.futas
    });

    await Player.build(choices);

    Game.chainEvent('game-start-2');
  },

});
