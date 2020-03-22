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
    'player.bed-location':           'great-hall',
    'player.bed-type':               'fur-pile',
    'player.fucks-futas':            'always',
    'player.fucks-men':              'maybe',
    'player.fucks-women':            'always',
  },

  setup: async game => {
    await EventCollections.addAct_1_1();

    const rat = await EventFunctions.createFirstMinion(Random.from(['male','female','female']));
    await rat.update({ type:'minion' });
  },

});
