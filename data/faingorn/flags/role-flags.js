
// (count) The number of times your minions have gone foraging, with individual
// counts for both successes and failures. These value are used to schedule
// which foraging items are unlocked as well as other events that are timed
// with the foraging.
FlagInfo.build('role.forage.success-count', { validateInteger:true, default:0 });
FlagInfo.build('role.forage.failure-count', { validateInteger:true, default:0 });

FlagInfo.build('role.hunter.success-today');
FlagInfo.build('role.hunter.failure-today');
