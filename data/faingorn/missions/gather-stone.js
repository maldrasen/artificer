Mission.build('gather-stone', {
  type: 'gather',
  name: 'Gather Stone',
  description: 'My minions will gather rocks and stones.',
  minions: { min:1, max:3 },
  time: 1,

  tempResults: { flavor:'stones', min:4, max:6 }

});
