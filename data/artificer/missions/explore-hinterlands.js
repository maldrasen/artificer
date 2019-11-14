Mission.build('explore-hinterlands', {
  type: 'explore',
  name: 'Explore Hinterlands',
  description: 'My minions will go out and explore the sorrounding area.',
  awayText: 'is off exploring the hinterlands.',
  minions: { min:2, max:4 },
  time: 2,

  discoveries: [
    { code:'discover-centaur-farm',     probability:10, brief:'found a nearby farm.' },
    { code:'discover-coal',             probability:20, brief:'discovered a source of coal.' },
    { code:'discover-old-battleground', probability:20, brief:'discovered an old battleground.' },
    { code:'discover-sheep',            probability:20, brief:'found a flock of sheep nearby.' },
    { code:"discover-old-campsite",     probability:5,  brief:'found an abandoned campsite.' },
    { code:'discover-ocean',            probability:30, brief:'scouted the nearby shore.' },
  ],
  events: [
    { code:'explore-ran-into-kobolds',  probability:10, brief:'encountered a pack of kobolds.'},
    { code:'explore-ran-into-goblins',  probability:5,  brief:'encountered a troop of goblins.'},
  ],

});
