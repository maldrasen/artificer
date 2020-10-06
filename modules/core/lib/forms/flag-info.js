// FlagInfo is a very simple Form used to validate flag values and to let the
// engine that we know that a flag exists. The form code is just the flag key.
//
// Flag Validators:
//   - validateInteger     true if the value should be parsed as an int.
//   - validateIn          An array of possible values.
//
// Example:
//   FlagInfo.build('likes.to.slap', { validateIn:['ass','tits','face'] });

global.FlagInfo = class FlagInfo extends Form {}
