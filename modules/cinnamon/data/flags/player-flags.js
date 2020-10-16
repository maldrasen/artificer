
// The player's names and title, used to show the player's name on the location
// menu, seperate saved games, and maybe other places as well. These should be
// set as soon as the player model is built by Player.forge()
FlagInfo.build('player.first-name', { default:'Sebastian' });
FlagInfo.build('player.last-name', { default:'Rhysh' });
FlagInfo.build('player.title', { default:'master' });

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
