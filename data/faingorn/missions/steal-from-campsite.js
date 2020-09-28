Mission.build('steal-from-campsite', {
  type: 'event',
  name: 'Steal From Campsite',
  description: `I will send someone to steal from the trapper's camp.`,
  minions: { min:1, max:1 },
  time: 1,

  event: 'minion-steals-from-campsite',
  story: `{{C::character.firstName}} steals all {{he}} can carry from the trapper's camp.`,
});
