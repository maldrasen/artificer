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
    if (descriptive == 'player')              { return await Player.instance(); }
    if (descriptive == 'any-minion')          { return await findAny();         }
    if (descriptive == 'most-injured-minion') { return await findMostInjured(); }

    if (descriptive.match(/^flag=/))          { return await characterAtFlag(descriptive); }

    // TODO: Replace with regular expressions that match any species.
    if (descriptive == 'any-scaven')          { return await findAny('scaven'); }

    // TODO: Figure out if we still want to use this. It's use in the specs but
    //       In the game currently.
    if (descriptive == 'scaven-chief')        { return await scavenChief(); }

    throw `Cannot find a character that matches ${descriptive}`;
  }

  async function characterAtFlag(descriptive) {
    const flag = descriptive.match(/^flag=(.+)/)[1];
    const id = Flag.lookup(flag);
    return await Character.lookup(id);
  }

  // This function gets the chief of the scaven. If the scaven chief flag has
  // been set and that character is still alive this will return that character.
  // Otherwise the strongest scaven will be made chief.
  //
  // TODO: When we get new scaven we may need to delete this flag to ensure
  //       that the chief is always the strongest scaven. A change in
  //       leadership like that might warrent another event.
  async function scavenChief() {
    if (Flag.lookup('character.scaven-chief')) {
      const chief = await Character.lookup(Flag.lookup('character.scaven-chief'));
      if (chief && chief.alive) {
        return chief;
      }
    }

    const newChief = await findStrongest('scaven');
    Flag.set('character.scaven-chief',newChief.id);
    return newChief;
  }

  function findAny(species) {
    return (species == null) ?
      Character.findOne({ where:{ type:'minion', status:'normal' }}):
      Character.findOne({ where:{ type:'minion', status:'normal', speciesCode:species }});
  }

  // Is this ugly or beautiful? Functional and technically done in a single
  // line, but yikes. This function maps the minions to an array of objects
  // with the minion and their health value, then sorts by the health values,
  // then grabs the first minion.
  async function findMostInjured() {
    return (await Promise.all((await Character.getNormalMinions()).map(async minion => {
      return { minion:minion, health:(await minion.getHealth()) };
    }))).sort((m1,m2) => {
      return m1.health - m2.health;
    })[0].minion;
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

  // TODO: This should all be redone using the consent calculator to also
  //       determine which minions are horny.

  // Finds a character of a given species that the player might prefer sexually.
  // The species attribute is optional here. A character of any species will be
  // selected if it's excluded.
  // async function findSexable(species) {
  //   const always = await Flag.alwaysFuckGenderList();
  //   const maybe = await Flag.maybeFuckGenderList();
  //   let genderList = [];
  //
  //   // We usually select a character with a gender that the player has the
  //   // strongist preference for, sometimes though we include the maybe list of
  //   // genders as well.
  //   if (always.length > 0 && maybe.length > 0) {
  //     genderList = (Random.upTo(3) == 0) ? [...always, ...maybe] : always
  //   }
  //
  //   // Attempt one, preferred genders.
  //   let characters = await sexableSearch(species, genderList);
  //   if (characters.length > 0) {
  //     return Random.from(uglyFilter(characters));
  //   }
  //
  //   // Attempt two, possibly ok genders.
  //   characters = await sexableSearch(species, maybe);
  //   if (characters.length > 0) {
  //     return Random.from(uglyFilter(characters));
  //   }
  //
  //   // Attempt three, any hole will do.
  //   characters = await ungenderedSexableSearch(species);
  //   return Random.from(uglyFilter(characters));
  // }

  // function sexableSearch(species,gender) {
  //   return (species != null) ?
  //     Character.findAll({ where:{ type:'minion', status:'normal', speciesCode:species, genderCode:gender }, order:[['personal','DESC']]}):
  //     Character.findAll({ where:{ type:'minion', status:'normal', genderCode:gender }, order:[['personal','DESC']]});
  // }
  //
  // function ungenderedSexableSearch(species) {
  //   return (species != null) ?
  //     Character.findAll({ where:{ type:'minion', status:'normal', speciesCode:species }, order:[['personal','DESC']]}):
  //     Character.findAll({ where:{ type:'minion', status:'normal' }, order:[['personal','DESC']]});
  // }

  // Find the most beautiful person in the list, and remove anyone who's half
  // as attractive. Not guaranteed to find attractive characters, just the
  // relatively attractive ones
  // function uglyFilter(characters) {
  //   let maxPersonal = characters[0].personal;
  //   return characters.filter((character)=>{
  //     return character.personal*2 >= maxPersonal
  //   });
  // }

  // The allOfSpecies() function gets all the minions of a given species. I
  // think this function should only ever return living minions, not those who
  // are dead or missing, and shouldn't return the player, if if the player is
  // of the specified species.
  async function allOfSpecies(code) {
    return await Character.findAll({ where:{ type:'minion', status:'normal', speciesCode:code }});
  }

  return {
    findActors,
    findActor,
    scavenChief
  };

})();
