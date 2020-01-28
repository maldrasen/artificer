global.SexualScrutinizer = (function() {

  async function check(requirement, context) {
    if (requirement.match(/^canSuckCock/)) { return await checkOral(requirement,context); }
  }

  async function checkOral(requirement, context) {
    let matchData = requirement.match(/^canSuckCock\((.+),(.+)\)\.(.+)=(.+)/)
    let sucker = context.get(matchData[1]);
    let sucked = context.get(matchData[2]);
    let key = matchData[3];
    let value = matchData[4];
    let data = await sucker.character.canSuckCock(sucked.cock);

    return `${data[key]}` == value
  }

  return { check };

})();
