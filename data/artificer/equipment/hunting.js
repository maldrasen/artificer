
Equipment.build('sling', {
  name: 'Sling',
  slot: 'weapon',
  degrade: () => {
    return Random.upTo(15);
  },
});

Equipment.build('skinning-knife', {
  name: 'Skinning Knife',
  slot: 'tool',
  degrade: () => {
    return Random.upTo(5);
  },
});
