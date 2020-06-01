global.CharacterAgent = (function() {

  // Sometimes we want to find one or more actors given a descriptive. The
  // findActors() function first tries to get a group of actors based on the
  // descriptive. Then, if it can't, it returns whatever findActor() returns in
  // an array.
  async function findActors(descriptive) {
    if (descriptive == 'all-scaven') { return await allOfSpecies('scaven'); }
    return [(await findActor(descriptive))];
  }

  // TODO: This function is mostly used by the Context to add characters to a
  //       scene. In its current implementation it's possible to select the
  //       same minion multiple times. That might not always be wrong, but
  //       usually when selecting actors we want them all to be different.
  //       However, if you wanted to select two minions who were out hunting,
  //       there's currently no way to do that while ensuring that the two
  //       minions are unique. I don't know if this is the right place to
  //       handle that. It makes sense that the CharacterAgent is unaware of
  //       context. We may need to change the way actors are specified in the
  //       event if we want to pull multiple unique random characters. We have
  //       the advantage here that actor keys are always single letters, so we
  //       could do something like { AB:'was-hunting' } to signify that A and B
  //       should be random but unique. I'll wait until it's a problem though
  //       before I bother implementing something like that, which would
  //       require a fail/retry loop, or some precondition checking, or extra
  //       functions to pull multiple randoms in the agent here.
  //
  async function findActor(descriptive) {
    if (descriptive == 'player')              { return await Player.instance(); }
    if (descriptive == 'solstice')            { return await characterAtFlag('flag=character.solstice'); }

    if (descriptive == 'any-minion')          { return await findAny(); }
    if (descriptive == 'any-scaven')          { return await findAnySpecies('scaven'); }
    if (descriptive == 'most-injured-minion') { return await findMostInjured(); }
    if (descriptive == 'was-hunting')         { return await wasWorkingRole('hunter'); }
    if (descriptive == 'was-foraging')        { return await wasWorkingRole('forager'); }
    if (descriptive.match(/^flag=/))          { return await characterAtFlag(descriptive); }

    throw `Cannot find a character that matches ${descriptive}`;
  }

  async function characterAtFlag(descriptive) {
    const flag = descriptive.match(/^flag=(.+)/)[1];
    const id = Flag.lookup(flag);
    return await Character.lookup(id);
  }

  async function findAny() {
    return Random.from((await Character.findAll({ where:{
      status:'normal', type:'minion'
    }})));
  }

  async function findAnySpecies(species) {
    return Random.from((await Character.findAll({ where:{
      status:'normal', type:'minion', speciesCode:species
    }})));
  }

  async function wasWorkingRole(role) {
    return Random.from((await Character.findAll({ where:{
      status:'normal', type:'minion', currentDuty:'role', dutyCode:role
    }})));
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

  async function allOfSpecies(code) {
    return await Character.findAll({ where:{ type:'minion', status:'normal', speciesCode:code }});
  }

  return {
    findActors,
    findActor,
  };

})();

// TODO: This should all be redone using the consent calculator to also
//       determine which minions are horny. Keeping this around until we need
//       it.

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
