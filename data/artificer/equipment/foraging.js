Equipment.build('basket', {
  name: 'Wicker Basket',
  slot: 'tool',
  degrade: () => {
    return Random.upTo(10);
  },
  whenBroken: 'destroy',
  whenBrokenStory: `{{C::character.firstName's}} basket broke and can no longer be used. It will be used as kindling.`,
  capacityBonus: 1,
});

Equipment.build('bug-net', {
  name: 'Bug Net',
  slot: 'tool',
  degrade: () => {
    return Random.upTo(6);
  },
});
