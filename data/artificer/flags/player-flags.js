
// The player's names and title, used to show the player's name on the location
// menu, and perhaps other places as well. These should be set as soon as the
// player model is built by Player.forge()
FlagInfo.build('player.firstName', {});
FlagInfo.build('player.lastName', {});
FlagInfo.build('player.title', {});

// The player's gender preference for men.
FlagInfo.build('player.fucksMen', {
  validateIn: ['always','maybe','never']
});

// The player's gender preference for futas.
FlagInfo.build('player.fucksFutas', {
  validateIn: ['always','maybe','never']
});

// The player's gender preference for women.
FlagInfo.build('player.fucksWomen', {
  validateIn: ['always','maybe','never']
});

// The number of times the player has meditated.
FlagInfo.build('player.meditate-count', {
  validateInteger: true,
  default: 0,
});
