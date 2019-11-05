global.MinionScrutinizer = (function() {

  async function check(requirement, context) {
    if (requirement.match(/^minions.working-project/)) { return checkWorkingMinionCount(requirement, context); }
    if (requirement.match(/^minion\(.+\)\./)) { return checkMinion(requirement, context); }

    throw `Unknown Minion Requirement - ${requirement}`;
  }

  async function checkMinion(requirement, context) {
    let match = requirement.match(/^minion\((.+)\)\.(.+)/);
    let minion = context.get(match[1]);

    if (minion == null) {
      throw `The minion(${match[1]}) should have been in the context before the scrutinizer was invoked.`
    }

    return CharacterScrutinizer.check(match[2], minion)
  }

  // To check how many menions are working on a project. This requirement has
  // the format: "minions.working-project>1" and can use < or >
  function checkWorkingMinionCount(requirement, context) {
    if (context.get('minionData') == null) {
      context.addMinionData();
    }
    if (requirement.indexOf('<') > 0) {
      return context.get('minionData').workingCount < parseInt(requirement.split('<')[1])
    }
    if (requirement.indexOf('>') > 0) {
      return context.get('minionData').workingCount > parseInt(requirement.split('<')[1])
    }
    throw `No operation in minion count requirement.`
  }

  return { check };

})();
