Equipment.build('basket', {
  name: 'Wicker Basket',
  slot: 'tool',
  capacityBonus: 1,

  degrades: {
    minDamage: 1,
    maxDamage: 5,
    when: 'forager',
    whenBroken: 'destroy',
    whenBrokenStory: `{{C::character.firstName's}} basket broke and can no longer be used.`,
  },
});

Equipment.build('bug-net', {
  name: 'Bug Net',
  slot: 'tool',

  degrades: {
    minDamage: 1,
    maxDamage: 10,
    when: 'forager',
    whenBroken: 'destroy',
    whenBrokenStory: `{{C::character.firstName's}} bug net has broken and can no longer be used.`,
  },
});
