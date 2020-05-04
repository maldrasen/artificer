
Order.build('reward-blood-berries', {
  label: 'Reward Blood Berries',
  description: `When I have too many blood berries in storage, I'll take about half of them and give them out to my
    scavens. This should increase the loyalty of all my scaven minions.`,
  type:'boolean',
});

// TODO: Minion List orders. This isn't unlocked yet. It's opened up after the
//       first bath event. Once it is though we can worry about implementing
//       more complex orders.
Order.build('sleeps-with-player', {
  label: 'Choose Bedwarmers',
  description: `I have chosen these minions to share my bed with me.`,
  type:'minion-list',
  min: 0,
  max: '{flag.bed-size}'
});
