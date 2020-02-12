
// Turns on the ability to submit a plan where the player is idle for the day.
FlagInfo.build('plan-view.allow-idle', {
  validateIn: ['unlocked'],
});

// Turns on the ability to send minions on missions.
FlagInfo.build('plan-view.missions', {
  validateIn: ['unlocked'],
});

// Unlocks foraging when set.
FlagInfo.build('plan-view.roles.forager', {
  validateIn: ['unlocked'],
});

// Unlocks hunting when set.
FlagInfo.build('plan-view.roles.hunter', {
  validateIn: ['unlocked'],
});

// Unlocks resting when set.
FlagInfo.build('plan-view.roles.rest', {
  validateIn: ['unlocked'],
});

// Unlocks brainwashing when set.
FlagInfo.build('plan-view.tasks.brainwash', {
  validateIn: ['unlocked'],
});

// Unlocks any crafting when set.
FlagInfo.build('plan-view.tasks.craft', {
  validateIn: ['unlocked'],
});

// Unlocks any dominate when set.
FlagInfo.build('plan-view.tasks.dominate', {
  validateIn: ['unlocked'],
});

// Unlocks experimentation when set.
FlagInfo.build('plan-view.tasks.experiment', {
  validateIn: ['unlocked'],
});

// Unlocks meditation when set.
FlagInfo.build('plan-view.tasks.meditate', {
  validateIn: ['unlocked'],
});

// Unlocks any terrorize when set.
FlagInfo.build('plan-view.tasks.terrorize', {
  validateIn: ['unlocked'],
});

// Unlocks piss training when set.
FlagInfo.build('plan-view.tasks.train.golden', {
  validateIn: ['unlocked'],
});
