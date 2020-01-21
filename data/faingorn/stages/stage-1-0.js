GameStage.build('stage-1-0',{
  location: 'great-hall',
  gameDay: 3,

  flags: {
    'location.currentStudy':        'great-hall',
    'location.keepName':            'Faingorn Keep',
    'locationMenu.map':             'unlocked',
    'locationMenu.minions':         'unlocked',
    'map.cellars':                  'unlocked',
    'map.courtyard':                'unlocked',
    'map.great-hall':               'unlocked',
    'map.lower-keep':               'unlocked',
    'map.upper-keep':               'unlocked',
    'plan-view.allow-idle':         'unlocked',
    'plan-view.roles.forager':      'unlocked',
    'player.fucksFutas':            'always',
    'player.fucksMen':              'maybe',
    'player.fucksWomen':            'always',
  },

  setup: async game => {
    let rat = await CharacterBuilder.build({ species:'scaven', gender:'female', physical:12, personal:10, mental:8, magical:0 });
    await Flag.set('character.firstScaven',rat.id)
  },

});
