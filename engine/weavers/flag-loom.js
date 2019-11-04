Weaver.FlagLoom = (function() {

  // Flag Tokens:
  //   flag|flag-name  Value of the flag
  //
  function findValue(token, context) {
    return context.properties.flags[token] || `UNSET_FLAG[${token}]`;
  }

  return { findValue };

})();
