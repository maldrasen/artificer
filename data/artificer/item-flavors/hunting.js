
ItemFlavor.build('rabbit-meat', {
  name: 'Rabbit Haunch',
  type: 'small-game',
  foodValue: 3,
  storyWord: 'rabbit',
  xp: 2,
  icon: '../../resources/icons/rabbit-meat.png',
});

ItemFlavor.build('squirrel-meat', {
  name: 'Squirrel Bits',
  type: 'small-game',
  foodValue: 2,
  storyWord: 'squirrel',
  xp: 1,
  icon: '../../resources/icons/squirrel-meat.png',
});

ItemFlavor.build('rat-meat', {
  name: 'Rat Chunks',
  type: 'small-game',
  foodValue: 2,
  storyWord: 'rat',
  xp: 1,
  icon: '../../resources/icons/rat-meat.png',
});

ItemFlavor.build('other-meat', {
  name: "Don't Ask",
  type: 'small-game',
  foodValue: 1,
  storyWord: 'squirming thing',
  xp: 0,
  icon: '../../resources/icons/other-meat.png',
});

ItemFlavor.build('rabbit-pelt', {
  name: 'Rabbit Pelt',
  type: 'small-game-pelt',
  becomes: 'hide',
  becomesCount: 1,
  foodValue: 3,
  storyWord: 'hare',
  xp: 3,
  icon: '../../resources/icons/rabbit-pelt.png',
});

ItemFlavor.build('fox-pelt', {
  name: 'Fox Pelt',
  type: 'small-game-pelt',
  becomes: 'hide',
  becomesCount: 1,
  foodValue: 4,
  storyWord: 'fox',
  storyWords: 'foxes',
  xp: 4,
  icon: '../../resources/icons/fox-pelt.png',
});

ItemFlavor.build('raccoon-pelt', {
  name: 'Raccoon Pelt',
  type: 'small-game-pelt',
  becomes: 'hide',
  becomesCount: 1,
  foodValue: 3,
  storyWord: 'raccoon',
  xp: 3,
  icon: '../../resources/icons/raccoon-pelt.png',
});
