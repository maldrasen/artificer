global.CentralScrutinizer = (function() {

  // The CentralScrutinizer is used by a variety of other models to check if
  // all of its requirements are met. The requires argument can be either a
  // string or an array of strings.
  async function meetsRequirements(requires) {
    if (requires == null) { return true; }

    return ((typeof requires == "string") ? [requires] : requires).map(requirement => {
      return meetsRequirement(requirement);
    }).indexOf(false) < 0;
  }

  function meetsRequirement(requirement) {
    throw `Unknown Requirement - ${requirement}`;
  }

  return { meetsRequirements:meetsRequirements };

})();
