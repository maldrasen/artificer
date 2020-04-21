Mission.build('explore-hinterlands', {
  type: 'explore',
  name: 'Explore Hinterlands',
  description: 'My minions will go out and explore the nearby sorrounding area.',
  awayText: 'is off exploring the hinterlands.',
  minions: { min:1, max:2 },
  time: 1,

  discoveries: [
    { code:'explore.discover-campsite', probability:10, brief:`found a trapper's camp in the woods.` },
    { code:'explore.discover-coal',     probability:20, brief:'discovered a source of coal.' },
    { code:'explore.discover-sisal',    probability:20, brief:'found a field full of sisal.' },
    { code:'explore.discover-sheep',    probability:20, brief:'found a flock of sheep nearby.' },
  ],
  events: [
    { code:'explore.ran-into-kobolds',  probability:10, brief:'encountered a pack of kobolds.'},
    { code:'explore.ran-into-goblins',  probability:5,  brief:'encountered a troop of goblins.'},
  ],

  onStart: minions => {
    Game.addEvent('first-mission',{ actors:{ C:minions[0].id }});
  },

});
