global.CharacterAgent = (function() {

  // Sometimes we want to find one or more actors given a descriptive. The
  // findActors() function first tries to get a group of actors based on the
  // descriptive. Then if it can't it returns whatever findActor() returns in
  // an array.
  async function findActors(descriptive) {
    if (descriptive == 'all-scaven') { return await allOfSpecies('scaven'); }

    return [(await findActor(descriptive))];
  }

  async function findActor(descriptive) {
    if (descriptive == 'player')              { return await Player.instance();      }

    // Scaven
    if (descriptive == 'any-scaven')          { return await findAny('scaven');      }
    if (descriptive == 'a-sexy-scaven')       { return await findSexable('scaven');  }
    if (descriptive == 'the-smartest-scaven') { return await findSmartest('scaven'); }
    if (descriptive == 'scaven-chief')        { return await scavenChief();          }

    throw `Cannot find a character that matches ${descriptive}`;
  }

  // This function get's the chief of the scaven. If the scaven chief flag has
  // been set and that character is still alive this will return that character.
  // Otherwise the strongest scaven will be made chief.
  //
  // TODO: When we get new scaven we may need to delete this flag to ensure
  //       that the chief is always the strongest scaven. A change in
  //       leadership like that might warrent another event.
  async function scavenChief() {
    const flag = await Flag.lookup('character.scavenChief');
    if (flag) {
      const chief = await Character.lookup(flag.value);
      if (chief && chief.alive) {
        return chief;
      }
    }

    const newChief = await findStrongest('scaven');
    await Flag.set('character.scavenChief',newChief.id)
    return newChief;
  }

  function findAny(species) {
    return Character.findOne({ where:{ speciesCode:species }});
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

  // The allOfSpecies() function gets all the minions of a given species. I
  // think this function should only ever return living minions, not those who
  // are dead or missing, and shouldn't return the player, if if the player is
  // of the specified species.
  function allOfSpecies(code) {
    return Character.findAll({ where:{ speciesCode:code, status:'normal', type:'minion' }});
  }

  return {
    findActors,
    findActor,
    scavenChief
  };

})();
