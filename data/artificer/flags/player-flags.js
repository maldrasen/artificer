
// The player's name, used to show the player's name on the location menu. This
// should be set as soon as the player model is built by Player.forge()
FlagInfo.build('player.firstName', {});

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
