global.MinionScrutinizer = (function() {

  async function check(requirement, context) {
    if (requirement.match(/^minions.working-project/)) { return await checkWorkingMinionCount(requirement, context); }
    if (requirement == 'minions.will-betray')          { return await checkBetray(context); }
    if (requirement == 'minions.will-not-betray')      { return await checkBetray(context) == false; }
    if (requirement == 'minions.will-mutiny')          { return await checkMutiny(context); }
    if (requirement == 'minions.will-not-mutiny')      { return await checkMutiny(context) == false; }

    if (requirement.match(/^minion\(.+\)\./)) { return checkMinion(requirement, context); }

    throw `Unknown Minion Requirement - ${requirement}`;
  }

  // Checks requirements in the form minion(X). This requirement needs to check an individual minion's attributes, so
  // pass this off to the CharacterScrutinizer.
  async function checkMinion(requirement, context) {
    let match = requirement.match(/^minion\((.+)\)\.(.+)/);
    let minion = context.get(match[1]);

    if (minion == null) {
      throw `The minion(${match[1]}) should have been in the context before the scrutinizer was invoked.`
    }

    return CharacterScrutinizer.check(match[2], minion)
  }

  // To check how many menions are working on a project. This requirement has the format: "minions.working-project>1"
  async function checkWorkingMinionCount(requirement, context) {
    await context.addMinionData();
    let count = context.get('minionData').workingCount;
    let match = requirement.match(/project(<|<=|=|>=|>)([^<>=]+)/);
    return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
  }

  async function checkBetray(context) {
    await context.addFlags();
    return parseInt(context.get('flags')['minions.traitorous-count'] || 0) > 0
  }

  // You minions will mutiny if you have more rebellious minions than loyal minions. The minimum number of minions that
  // can mutiny is 4, with 3 rebellious and 1 loyal.
  async function checkMutiny(context) {
    await context.addFlags();
    let loyal =      parseInt(context.get('flags')['minions.loyal-count'] || 0);
    let rebellious = parseInt(context.get('flags')['minions.rebellious-count'] || 0);
    return (loyal + rebellious > 3) && (rebellious > loyal);
  }

  return { check };

})();
