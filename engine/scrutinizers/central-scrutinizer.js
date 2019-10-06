global.CentralScrutinizer = (function() {

  // The CentralScrutinizer is used by a variety of other models to check if
  // all of its requirements are met. The requires argument can be either a
  // string or an array of strings.
  async function meetsRequirements(requires) {
    if (requires == null) { return true; }

    let requirements = (typeof requires == "string") ? [requires] : requires;
    let checks = await Promise.all(requirements.map(async requirement => {
      return await meetsRequirement(requirement);
    }));

    return checks.indexOf(false) < 0;
  }

  async function meetsRequirement(requirement) {
    if (requirement.match(/^game.dayNumber=/)) { return await checkDayNumber(requirement); }
    throw `Unknown Requirement - ${requirement}`;
  }

  // Day number requirement (game.dayNumber=3) checks to make sure that the
  // day number is at least the specified date. I mean it says '=' but it's
  // really a '>='
  async function checkDayNumber(requirement) {
    const game = await Game.instance();
    return game.dayNumber >= requirement.split('=')[1];
  }

  return { meetsRequirements:meetsRequirements };

})();
