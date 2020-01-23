
// === Food ===

ItemFlavor.build('bitter-fruits', {
  name: 'Bitter Fruits',
  type: 'foraged-food',
  foodValue: 2,
  story:{ called:'bitter fruits', countable:true },
  xp: 1,
});

ItemFlavor.build('goat-nuts', {
  name: 'Goat Nuts',
  type: 'foraged-food',
  foodValue: 1,
  story:{ called:'goat nuts', countable:true },
  xp: 1,
});

ItemFlavor.build('juice-berries', {
  name: 'Juice Berries',
  type: 'foraged-food',
  foodValue: 1,
  story:{ called:'juice berries', countable:true },
  xp: 1,
});

ItemFlavor.build('sweet-fruits', {
  name: 'Sweet Fruits',
  type: 'foraged-food',
  foodValue: 2,
  story:{ called:'sweet fruits', countable:true },
  xp: 2,
});

// === Herbs ===

ItemFlavor.build('blood-berries', {
  name: 'Blood Berries',
  type: 'foraged-herb',
  becomes: 'blood-berries',
  becomesCount: 10,
  story:{ called:'blood berries', countable:true },
  mustBeUnlocked: true,
  xp: 1,
});

ItemFlavor.build('creeping-moss', {
  name: 'Creeping Moss',
  type: 'foraged-herb',
  becomes: 'creeping-moss',
  becomesCount: 4,
  story:{ called:'creeping moss', countable:false },
  mustBeUnlocked: true,
  xp: 2,
});

ItemFlavor.build('firewasp', {
  name: 'Firewasp Pepper',
  type: 'foraged-herb',
  becomes: 'firewasp',
  becomesCount: 6,
  story:{ called:'firewasp peppers', countable:true },
  mustBeUnlocked: true,
  xp: 6,
});

ItemFlavor.build('itchweed', {
  name: 'Itchweed',
  type: 'foraged-herb',
  becomes: 'itchweed',
  becomesCount: 4,
  story:{ called:'itchweed', countable:false },
  mustBeUnlocked: true,
  xp: 4,
});

ItemFlavor.build('milkweed', {
  name: 'Milkweed',
  type: 'foraged-herb',
  becomes: 'milkweed',
  becomesCount: 4,
  story:{ called:'milkweed', countable:false },
  mustBeUnlocked: true,
  xp: 4,
});

ItemFlavor.build('purple-mushroom', {
  name: 'Purple Headed Donkey',
  type: 'foraged-herb',
  becomes: 'purple-mushroom',
  becomesCount: 1,
  story:{ called:'purple headed donkey', countable:true, singular:true },
  mustBeUnlocked: true,
  xp: 4,
});

// === Insects ===

ItemFlavor.build('blight-spider', {
  name: 'Harry Bag Spider',
  type: 'foraged-insect',
  becomes: 'blight-spider',
  becomesCount: 1,
  story:{ called:'harry bag spider', countable:true, singular:true },
  mustBeUnlocked: true,
  xp: 10,
});
