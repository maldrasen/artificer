Event.build('morning-1', {
  location: 'courtyard',

  background: { code:'courtyard', time:'morning' },

  stages:[{
    pages:[
      { text:`I wake up, I'm in the courtyard.` },
    ]
  }],

  onFinish: async () => {
    let game = await Game.instance();
    game.location = 'great-hall';
    game.dayNumber = 2;
    game.save();

    await EventQueue.enqueueEvent('morning-2');
    await Flag.setAll({
      'locationMenu.map': 'unlocked' ,
      'map.courtyard':    'unlocked',
      'map.great-hall':   'unlocked',
    });
  },

});
