global.Role = (function() {

  function lookup(code) {
    return {
      hunter: Role.Hunter,
      rest:   Role.Rest,
    }[code]
  }

  return {
    lookup: lookup,
  }

})();
