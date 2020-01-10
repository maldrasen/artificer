
// Turns on the inventory menu when set.
FlagInfo.build('locationMenu.inventory', {
  flagGroup: 'act-1.0',
  validateIn: ['unlocked'],
});

// Turns on the map menu when set.
FlagInfo.build('locationMenu.map', {
  flagGroup: 'act-1.0',
  validateIn: ['unlocked'],
});

// Turns on the minion menu when set.
FlagInfo.build('locationMenu.minions', {
  flagGroup: 'act-1.0',
  validateIn: ['unlocked'],
});

// The player has found a calandar or some way to show the date.
FlagInfo.build('locationMenu.showDate', {
  flagGroup: 'act-1.1',
  validateIn: ['unlocked'],
});
