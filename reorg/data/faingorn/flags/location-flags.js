
// (code) Set to the code of the location where the study actions can be
// performed.
FlagInfo.build('location.current-study', {
  default: 'great-hall',
  validateIn: ['great-hall','study'],
});

// Set by the player to name their keep. Set to Faingorn Keep by default.
FlagInfo.build('location.keep-name', {
  default: 'Faingorn Keep'
});

// Before we can catch a sheep we need a place to put them. This isn't
// implemented yet. Sheep can be discovered, but they can't be caught and we
// needed a way to turn that mission availibility off.
FlagInfo.build('location.sheepfold-built', { validateIn:['Y'] });