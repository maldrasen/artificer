Role.Rest = (function() {
  const code = 'rest';
  const name = 'Rest';
  const description = 'This minion will rest and relax. Resing minions heal faster and will entertain themselves.';

  async function work(character) {
    return {};
  }

  return {
    code,
    name,
    description,
    work,
  };

})();
