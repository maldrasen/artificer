GameStage.FlagCollections = {

  // Set all of the flags that should apply to every game stage. These flags
  // are set in the very beginning of the game by the morning-1-work event.
  setDefaults: function() {
    Flag.setAll({
      'location.current-study':  'great-hall',
      'location.keep-name':      'Faingorn Keep',
      'location-menu.map':       'Y',
      'player.bed-location':     'great-hall',
      'player.bed-type':         'fur-pile',
      'player.report-location':  'great-hall',
      'map.bath':                'Y',
      'map.cellars':             'Y',
      'map.courtyard':           'Y',
      'map.great-hall':          'Y',
      'map.lower-keep':          'Y',
      'map.upper-keep':          'Y',
    });
  },

  // When creating a debug game want to randomly assign the player's sexuality
  // in order to get a variety of different conditions that might happen. Futas
  // are set to maybe/always because they are the most rare, but the player
  // must have at least one non-never preference.
  setRandomSexuality: function() {
    Flag.set('player.fucks-futas',Random.from(['maybe','always']));
    Flag.set('player.fucks-men',  Random.from(['maybe','always','never']));
    Flag.set('player.fucks-women',Random.from(['maybe','always','never']));
  },

  setAct_1_1: function() {
    Flag.setAll({
      'location-menu.minions':   'Y',
      'plan-view.allow-idle':    'Y',
      'plan-view.roles.forager': 'Y',
      'plan-view.roles.rest':    'Y',
      'report-view.show-food':   'Y',
    });
  },

  setAct_1_2: function() {
    Flag.setAll({
      'item.bitter-fruits':          'Y',
      'item.blight-spider':          'Y',
      'item.blood-berries':          'Y',
      'item.goat-nuts':              'Y',
      'item.juice-berries':          'Y',
      'item.sweet-fruits':           'Y',
      'item.willow-branches':        'Y',
      'location-menu.inventory':     'Y',
      'location-menu.show-date':     'Y',
      'mission.explore-hinterlands': 'Y',
      'plan-view.missions':          'Y',
      'plan-view.tasks.craft':       'Y',
      'plan-view.tasks.meditate':    'Y',
      'player.maelstrom':            'Y',
      'player.meditate-count':       8,
      'recipe.basket':               'Y',
      'role.forage.failure-count':   1,
      'role.forage.success-count':   8,
    });
  },

  // Now that we're working in Act 1.3 remember to set flags here at the same
  // time they're added in other events.
  setAct_1_3: function() {
    Flag.setAll({
      // 'mission.gather-stone':        'Y',
      // 'mission.gather-timber':       'Y',
    });
  }

};
