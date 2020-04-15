Event.build('morning-1-end', {
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:'(*) End' }
    ]
  }],

  onFinish: async choices => {
    await AvailableProject.add({ code:'make-crude-fur-clothing' });
    await Game.updateLocation('great-hall');

    Flag.setAll({
      'location.current-study': 'great-hall',
      'location-menu.map':      'unlocked' ,
      'map.cellars':            'unlocked',
      'map.courtyard':          'unlocked',
      'map.great-hall':         'unlocked',
      'map.lower-keep':         'unlocked',
      'map.upper-keep':         'unlocked',
      'player.bed-location':    'great-hall',
      'player.bed-type':        'fur-pile',
    });
  },

});
