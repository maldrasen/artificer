Mission.build('gather-timber', {
  type: 'gather',
  name: 'Gather Timber',
  description: 'My minions will gather wood.',
  minions: { min:1, max:3 },
  time: 1,

  tempResults: { flavor:'sticks', min:6, max:10 }

});
