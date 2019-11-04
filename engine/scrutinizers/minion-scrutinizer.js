global.MinionScrutinizer = (function() {

  async function check(requirement, context) {
    if (requirement.match(/^minions.working-project/)) { return checkWorkingMinionCount(requirement, context); }

    throw `Unknown Minion Requirement - ${requirement}`;
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
