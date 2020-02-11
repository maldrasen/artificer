Equipment.build('basket', {
  name: 'Wicker Basket',
  slot: 'tool',
  degrade: () => {
    return Random.upTo(4);
  },
});

Equipment.build('bug-net', {
  name: 'Bug Net',
  slot: 'tool',
  degrade: () => {
    return Random.upTo(6);
  },
});
