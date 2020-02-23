GameStage.build('stage-1-0',{
  location: 'great-hall',
  gameDay: 3,

  flags: {
    'location.current-study':        'great-hall',
    'location.keep-name':            'Faingorn Keep',
    'location-menu.map':             'unlocked',
    'location-menu.minions':         'unlocked',
    'map.cellars':                   'unlocked',
    'map.courtyard':                 'unlocked',
    'map.great-hall':                'unlocked',
    'map.lower-keep':                'unlocked',
    'map.upper-keep':                'unlocked',
    'plan-view.allow-idle':          'unlocked',
    'plan-view.roles.forager':       'unlocked',
    'player.fucks-futas':            'always',
    'player.fucks-men':              'maybe',
    'player.fucks-women':            'always',
  },

  setup: async game => {
    await EventCollections.addAct_1_1();

    let rat = await CharacterBuilder.build({ species:'scaven', gender:'female', physical:12, personal:10, mental:8, magical:0 });
    await Flag.set('character.first-scaven',rat.id);
  },

});
