
// (code) Set to the code of the location where the study actions can be
// performed.
FlagInfo.build('location.currentStudy', {
  default: 'great-hall',
  validateIn: ['great-hall','study'],
});

// Set by the player to name their keep. Set to Faingorn Keep by default.
FlagInfo.build('location.keepName', {
  default: 'Faingorn Keep'
});
