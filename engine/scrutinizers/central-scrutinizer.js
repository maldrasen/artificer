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
    if (requirement == 'game.metric')          { return Environment.Metric; }
    if (requirement == 'game.not-metric')      { return ! Environment.Metric; }
    if (requirement.match(/^game.dayNumber=/)) { return await checkDayNumber(requirement); }
    if (requirement.match(/^flag\..+=.+/))     { return await checkExactFlagValue(requirement); }
    if (requirement.match(/^flag/))            { return await checkFlagExists(requirement); }
    if (requirement.match(/^no-flag/))         { return await checkFlagNotExists(requirement); }
    if (requirement.match(/^state\..+=.+/))    { return checkStateValue(requirement,extra.state); }
    if (requirement.match(/^player/))          { return await PlayerScrutinizer.check(requirement, context); }
    if (requirement.match(/^minion/))          { return await MinionScrutinizer.check(requirement, context); }
    if (requirement.match(/^canSuckCock/))     { return await SexualScrutinizer.check(requirement, context); }

    throw `Unknown Requirement - ${requirement}`;
  }

  // Day number requirement (game.dayNumber=3) checks to make sure that the
  // day number is at least the specified date. I mean it says '=' but it's
  // really a '>='
  async function checkDayNumber(requirement) {
    const game = await Game.instance();
    return game.dayNumber >= requirement.split('=')[1];
  }

  // Requirements Like: flag.player.bedsIn=hide
  async function checkExactFlagValue(requirement) {
    let match = requirement.match(/^flag\.(.+)=(.+)/);
    let flag = await Flag.lookup(match[1]);
    return (flag == null) ? false : (match[2] == flag.value);
  }

  // Requirements Like: flag.player.bedsIn
  async function checkFlagExists(requirement) {
    let code = requirement.match(/^flag\.(.+)/)[1];
    let flag = await Flag.lookup(code);
    return flag != null;
  }

  // Can't just negate, because of the regex.
  async function checkFlagNotExists(requirement) {
    let code = requirement.match(/^no-flag\.(.+)/)[1];
    let flag = await Flag.lookup(code);
    return flag == null;
  }

  // Requirements Like: state.sex=filthy
  function checkStateValue(requirement,state) {
    let match = requirement.match(/^state\.(.+)=(.+)/);
    return state[match[1]] == match[2];
  }

  return { meetsRequirements };

})();
