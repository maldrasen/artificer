global.CharacterAgent = (function() {

  async function findActor(descriptive) {
    if (descriptive == 'the-smartest-rat') { return await findSmartest('rat');  }
    if (descriptive == 'a-sexy-rat')       { return await findSexable('rat'); }
    if (descriptive == 'rat-chief')        { return await ratChief(); }
    throw `Cannot find a character that matches ${descriptive}`;
  }

  // This function get's the chief of the rats. If the rat chief flag has been
  // set and that character is still alive this will return that character.
  // Otherwise the strongest rat will be made chief.
  //
  // TODO: When we get new rats we may need to delete this flag to ensure that
  //       the chief is always the strongest rat. A change in leadership like
  //       that might warrent another event.
  async function ratChief() {
    const flag = await Flag.lookup('character.rat-chief');
    if (flag) {
      const chief = await Character.findByPk(flag.value);
      if (chief && chief.alive) {
        return chief;
      }
    }

    const newChief = await findStrongest('rat');
    const game = Game.instance();
    await game.setFlags({ 'character.rat-chief':newChief.id });
    return newChief;
  }

  function findSmartest(species) {
    return Character.findOne({ where:{ speciesCode:species }, order:[['mental','DESC']]});
  }

  function findStrongest(species) {
    return Character.findOne({ where:{ speciesCode:species }, order:[['physical','DESC']]});
  }

  function findSexiest(species) {
    return Character.findOne({ where:{ speciesCode:species }, order:[['personal','DESC']]});
  }

  // Finds a character of a given species that the player might prefer sexually.
  // The species attribute is optional here. A character of any species will be
  // selected if it's excluded.
  async function findSexable(species) {
    const always = await Flag.alwaysFuckGenderList();
    const maybe = await Flag.maybeFuckGenderList();
    let genderList = [];

    // We usually select a character with a gender that the player has the
    // strongist preference for, sometimes though we include the maybe list of
    // genders as well.
    if (always.length > 0 && maybe.length > 0) {
      genderList = (Random.upTo(3) == 0) ? [...always, ...maybe] : always
    }

    // Attempt one, preferred genders.
    let characters = await sexableSearch(species, genderList);
    if (characters.length > 0) {
      return Random.from(uglyFilter(characters));
    }

    // Attempt two, possibly ok genders.
    characters = await sexableSearch(species, maybe);
    if (characters.length > 0) {
      return Random.from(uglyFilter(characters));
    }

    // Attempt three, any hole will do.
    characters = await ungenderedSexableSearch(species);
    return Random.from(uglyFilter(characters));
  }

  function sexableSearch(species,gender) {
    return (species != null) ?
      Character.findAll({ where:{ speciesCode:species, genderCode:gender }, order:[['personal','DESC']]}):
      Character.findAll({ where:{ genderCode:gender }, order:[['personal','DESC']]});
  }

  function ungenderedSexableSearch(species) {
    return (species != null) ?
      Character.findAll({ where:{ speciesCode:species }, order:[['personal','DESC']]}):
      Character.findAll({ where:{}, order:[['personal','DESC']]});
  }

  // Find the most beautiful person in the list, and remove anyone who's half
  // as attractive. Not guaranteed to find attractive characters, just the
  // relatively attractive ones
  function uglyFilter(characters) {
    let maxPersonal = characters[0].personal;
    return characters.filter((character)=>{
      return character.personal*2 >= maxPersonal
    });
  }

  return {
    findActor: findActor,
  }

})();
