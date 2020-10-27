Event.build('game-start-1', {


  noSettingCard: true,
  setting: {
    phase: 'early',
    location: 'office'
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
      formPage: 'name-and-gender-form'
    },{
      formPage: 'sexuality-form'
    },{
      background: 'office',
      pages: [
        { text:`I carefully set the raven feathered quill back onto its stand and start to carefully read over the
            infernal contract once again. A careless mistake at this point could be fatal after all. Everything is as
            it should be though. The complex geometric sigils that make up the demonic language are compact enough that
            an entire contract, even one of this complexity, can fit on a single page. ` },
        { text:`Everything is as it should be. The paper is vellum, made from human skin, perfect and free from any
            blemishes. The red black ink is rendered from the same woman's blood and applied to the page without smudge
            or dribble. Finally satisfied I pick up the pen and sign the contract with a flourish.` },
        { text:`The black ink begins to glow a dull red, but steadily increases in brightness until the page is almost
            blinding to look at. Heat rises up off of the page as it starts to smolder and turn black, then finally
            completely bursts into flame. The hot flash of fire leaves nothing but a small pile of ashes on the desk.`},
      ]
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
