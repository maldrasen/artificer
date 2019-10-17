Weaver.FlagLoom = (function() {

  // Flag Tokens:
  //   flag|flag-name  Value of the flag
  //
  function findValue(utility, argument, context) {
    return context.properties.flags[argument] || `UNSET_FLAG[${argument}]`;
  }

  return { findValue };

})();
