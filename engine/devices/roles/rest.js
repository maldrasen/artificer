Role.Rest = (function() {
  const code = 'rest';
  const name = 'Rest';
  const description = 'This minion will rest and relax. Resing minions heal faster and will entertain themselves.';

  async function canWork(character) {
    return Flag.lookup('plan-view.roles.rest') == 'Y';
  }

  async function work(character) {
    return { story:`${character.singleName} spent the day resting.` };
  }

  return {
    code,
    name,
    description,
    canWork,
    work,
  };

})();
