GameStage.FlagCollections = {

  // Set all of the flags that should apply to every game stage. These flags
  // are set in the very beginning of the game by the morning-1-work event.
  setDefaults: function() {
    Flag.setAll({
      'location.current-study':  'great-hall',
      'location.keep-name':      'Faingorn Keep',
      'location-menu.map':       'unlocked',
      'player.bed-location':     'great-hall',
      'player.bed-type':         'fur-pile',
      'map.bath':                'unlocked',
      'map.cellars':             'unlocked',
      'map.courtyard':           'unlocked',
      'map.great-hall':          'unlocked',
      'map.lower-keep':          'unlocked',
      'map.upper-keep':          'unlocked',
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
      'location-menu.minions':   'unlocked',
      'plan-view.allow-idle':    'unlocked',
      'plan-view.roles.forager': 'unlocked',
      'report-view.show-food':   'unlocked',
    });
  },

};
