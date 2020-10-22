
Weaver.registerLoom('utility', /^flag/, (utility, flagName, context) => {
  return Flag.lookup(flagName) || `UNSET_FLAG[${flagName}]`;
});
