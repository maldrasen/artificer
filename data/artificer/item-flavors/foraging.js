
ItemFlavor.build('willow-branches', {
  name: 'Willow Branches',
  type: 'foraged-item',
  story:{ called:'willow branches', countable:true },
  becomes: 'willow-branch',
  becomesMin: 4,
  becomesMax: 6,
  maxStock: 100,
  xp: 1,
});

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
  becomesMin: 6,
  becomesMax: 10,
  maxStock: 200,
  story:{ called:'blood berries', countable:true },
  xp: 1,
});

ItemFlavor.build('creeping-moss', {
  name: 'Creeping Moss',
  type: 'foraged-herb',
  becomes: 'creeping-moss',
  becomesMin: 3,
  becomesMax: 4,
  maxStock: 50,
  story:{ called:'creeping moss', countable:false },
  xp: 2,
});

ItemFlavor.build('firewasp', {
  name: 'Firewasp Pepper',
  type: 'foraged-herb',
  becomes: 'firewasp',
  becomesMin: 3,
  becomesMax: 6,
  maxStock: 50,
  story:{ called:'firewasp peppers', countable:true },
  xp: 6,
});

ItemFlavor.build('itchweed', {
  name: 'Itchweed',
  type: 'foraged-herb',
  becomes: 'itchweed',
  becomesMin: 3,
  becomesMax: 4,
  maxStock: 50,
  story:{ called:'itchweed', countable:false },
  xp: 4,
});

ItemFlavor.build('milkweed', {
  name: 'Milkweed',
  type: 'foraged-herb',
  becomes: 'milkweed',
  becomesMin: 3,
  becomesMax: 4,
  maxStock: 50,
  story:{ called:'milkweed', countable:false },
  xp: 4,
});

ItemFlavor.build('purple-mushroom', {
  name: 'Purple Headed Donkey',
  type: 'foraged-herb',
  becomes: 'purple-mushroom',
  becomesCount: 1,
  maxStock: 50,
  story:{ called:'purple headed donkey', countable:true, singular:true },
  xp: 4,
});

// === Insects ===

ItemFlavor.build('blight-spider', {
  name: 'Harry Bag Spider',
  type: 'foraged-insect',
  becomes: 'blight-spider',
  becomesCount: 1,
  maxStock: 10,
  story:{ called:'harry bag spider', countable:true, singular:true },
  xp: 10,
});
