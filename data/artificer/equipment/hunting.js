
Equipment.build('sling', {
  name: 'Sling',
  slot: 'weapon',

  degrades: {
    minDamage: 1,
    maxDamage: 10,
    when: 'hunter',
    whenBroken: 'destroy',
    whenBrokenStory: `{{C::character.firstName's}} sling has snapped and can no longer be used.`,
    breaksInto: { 'leather-scraps':1 },
  },
});

Equipment.build('skinning-knife', {
  name: 'Skinning Knife',
  slot: 'tool',
});
