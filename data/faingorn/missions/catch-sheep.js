Mission.build('catch-sheep', {
  type: 'catch',
  name: 'Gather Sheep',
  description: 'My minions try to catch a sheep.',
  minions: { min:1, max:3 },
  time: 1,
  requires: 'flag.location.sheepfold-built',
});
