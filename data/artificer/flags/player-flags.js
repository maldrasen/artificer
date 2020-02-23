
// The player's names and title, used to show the player's name on the location
// menu, and perhaps other places as well. These should be set as soon as the
// player model is built by Player.forge()
FlagInfo.build('player.first-name', {});
FlagInfo.build('player.last-name', {});
FlagInfo.build('player.title', {});

// The player's gender preference for men.
FlagInfo.build('player.fucks-men', {
  validateIn: ['always','maybe','never']
});

// The player's gender preference for futas.
FlagInfo.build('player.fucks-futas', {
  validateIn: ['always','maybe','never']
});

// The player's gender preference for women.
FlagInfo.build('player.fucks-women', {
  validateIn: ['always','maybe','never']
});

// The number of times the player has meditated.
FlagInfo.build('player.meditate-count', {
  validateInteger: true,
  default: 0,
});

// The spheres of magic that have been unlocked.
FlagInfo.build('player.maelstrom', { validateIn: ['unlocked'] });
FlagInfo.build('player.adamant',   { validateIn: ['unlocked'] });
FlagInfo.build('player.gaea',      { validateIn: ['unlocked'] });
FlagInfo.build('player.morpheus',  { validateIn: ['unlocked'] });
FlagInfo.build('player.abyss',     { validateIn: ['unlocked'] });
