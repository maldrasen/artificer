
ItemFlavor.build('squirrel-meat', {
  name: 'Squirrel Bits',
  type: 'small-game',
  foodValue: 2,
  storyWord: 'squirrel',
  xp: 1,
});

ItemFlavor.build('rat-meat', {
  name: 'Rat Chunks',
  type: 'small-game',
  foodValue: 2,
  storyWord: 'rat',
  xp: 1,
});

ItemFlavor.build('other-meat', {
  name: "Don't Ask",
  type: 'small-game',
  foodValue: 1,
  storyWord: 'squirming thing',
  xp: 0,
});

ItemFlavor.build('rabbit-pelt', {
  name: 'Rabbit Pelt',
  type: 'small-game-pelt',
  becomes: 'hide',
  becomesCount: 1,
  foodValue: 3,
  storyWord: 'hare',
  xp: 3,
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
});

ItemFlavor.build('raccoon-pelt', {
  name: 'Raccoon Pelt',
  type: 'small-game-pelt',
  becomes: 'hide',
  becomesCount: 1,
  foodValue: 3,
  storyWord: 'raccoon',
  xp: 3,
});
