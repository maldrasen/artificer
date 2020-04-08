global.CentralScrutinizer = (function() {

  // The CentralScrutinizer is used by a variety of other models including the
  // Weaver to check if all requirements are met. The requires argument can be
  // either a string or an array of strings. Context should be a weaver context,
  // if the context is null a new weaver context will be built over time.
  async function meetsRequirements(requires, context, extra) {
    if (requires == null) { return true; }
    if (context == null) { context = new WeaverContext(); }
    if (extra == null) { extra = {}; }

    let requirements = (typeof requires == "string") ? [requires] : requires;
    let checks = await Promise.all((requirements).map(async requirement => {
      return await meetsRequirement(requirement, context, extra);
    }));

    return checks.indexOf(false) < 0;
  }

  async function meetsRequirement(requirement, context, extra) {
    if (requirement == 'game.metric')          { return Settings.Metric; }
    if (requirement == 'game.not-metric')      { return ! Settings.Metric; }
    if (requirement.match(/^game.dayNumber/))  { return await checkDayNumber(requirement); }
    if (requirement.match(/^game.food/))       { return await checkFood(requirement); }
    if (requirement.match(/^flag/))            { return checkFlag(requirement); }
    if (requirement.match(/^no-flag/))         { return checkFlagNotExists(requirement); }
    if (requirement.match(/^state/))           { return checkState(requirement,extra.state); }
    if (requirement.match(/^player/))          { return await PlayerScrutinizer.check(requirement, context); }
    if (requirement.match(/^minion/))          { return await MinionScrutinizer.check(requirement, context); }
    if (requirement.match(/^canSuckCock/))     { return await SexualScrutinizer.check(requirement, context); }

    throw `Unknown Requirement - ${requirement}`;
  }

  // This function is used by any requirement check that needs to compare two
  // values. A RegEx like ([^<>=]+)(<|<=|=|>=|>)([^<>=]+) can be used to get
  // two values on either side of a comparison operation.
  function checkComparisonOperation(leftValue,operation,rightValue) {
    if (operation == '<=') { return parseInt(leftValue) <= parseInt(rightValue); }
    if (operation == '>=') { return parseInt(leftValue) >= parseInt(rightValue); }
    if (operation == '<')  { return parseInt(leftValue) < parseInt(rightValue); }
    if (operation == '>')  { return parseInt(leftValue) > parseInt(rightValue); }
    return leftValue == rightValue;
  }

  // Day number requirement (game.dayNumber=3) (game.dayNumber>20)
  async function checkDayNumber(requirement) {
    let match = requirement.match(/dayNumber(<|<=|=|>=|>)([^<>=]+)/);
    return checkComparisonOperation((await Game.instance()).dayNumber,match[1],match[2]);
  }

  // Food number requirement (game.food=0) (game.food>100)
  async function checkFood(requirement) {
    let match = requirement.match(/food(<|<=|=|>=|>)([^<>=]+)/);
    return checkComparisonOperation((await Game.instance()).food,match[1],match[2]);
  }

  // Requirements Like: flag.cock=horse, or flag.dicksSucked>=37
  function checkFlag(requirement) {
    let match = requirement.match(/^flag\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
    if (match == null) {
      return checkFlagExists(requirement);
    }

    let value = Flag.lookup(match[1]);
    return (value == null) ? false : checkComparisonOperation(value, match[2], match[3]);
  }

  function checkFlagExists(requirement) {
    return Flag.lookup(requirement.match(/^flag\.(.+)/)[1]) != null;
  }

  function checkFlagNotExists(requirement) {
    return Flag.lookup(requirement.match(/^no-flag\.(.+)/)[1]) == null;
  }

  // Requirements Like: state.sex=filthy, or state.litersOfCum>=37
  function checkState(requirement,state) {
    let match = requirement.match(/^state\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
    return checkComparisonOperation(state[match[1]], match[2], match[3]);
  }

  return { meetsRequirements, checkComparisonOperation };

})();
