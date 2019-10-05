global.CharacterAgent = (function() {

  async function findActor(descriptive) {
    if (descriptive == 'the-smartest-rat') { return await findSmartest('rat');  }
    if (descriptive == 'rat-chief')        { return await findStrongest('rat'); }
    throw `Cannot find a character that matches ${descriptive}`;
  }

  function findSmartest(species) {
    return Character.findOne({ where:{ speciesCode:'rat' }, order:[['mental','DESC']]});
  }

  function findStrongest(species) {
    return Character.findOne({ where:{ speciesCode:'rat' }, order:[['physical','DESC']]});
  }

  return {
    findActor: findActor,
  }

})();
