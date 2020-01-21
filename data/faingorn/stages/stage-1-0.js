GameStage.build('stage-1-0',{
  location: 'great-hall',
  gameDay: 3,

  eventQueue: [
    { code:'looking-outside-2' }
  ],

  minions: [
    { builder:{ gender:'female', species:'scaven', physical:12, personal:10, mental:8, magical:0 }},
  ],

  flags: {
    'completed.ambush-rat-torment': 1,
    'location.currentStudy':        'great-hall',
    'location.keepName':            'Faingorn Keep',
    'locationMenu.map':             'unlocked',
    'locationMenu.minions':         'unlocked',
    'map.cellars':                  'unlocked',
    'map.courtyard':                'unlocked',
    'map.great-hall':               'unlocked',
    'map.lower-keep':               'unlocked',
    'map.upper-keep':               'unlocked',
    'player.fucksFutas':            'always',
    'player.fucksMen':              'always',
    'player.fucksWomen':            'always',
  }
});
