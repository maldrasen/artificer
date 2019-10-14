Role.Hunter.Injuries = (function() {
  let painfulInjuries = [];
  let criticalInjuries = [];

  // Add an injury and its story to the array of possible injuries to pull
  // from. We validate a lot of these arguments because they're coming in from
  // the /data folder.

  function addPossibleInjury(data) {
    if (data.location == null) { throw "An injury location is required" }
    if (data.type == null)     { throw "An injury damage type is required" }
    if (data.level == null)    { throw "An injury level is required" }
    if (data.story == null)    { throw "An injury story is required" }

    if (Injury.LOCATIONS.indexOf(data.location) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (Injury.DAMAGE_TYPES.indexOf(data.type) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (data.level < 1 || data.level > 5) { throw `level should be between 1 and 5.`; }

    (['head','body'].indexOf(data.location) < 0) ?
      painfulInjuries.push(data):
      criticalInjuries.push(data);
  }

  async function resolve(options) {
    if (Random.roll(100) < injuryChance(options)) {
      let roll = Random.upTo(100);
      if (roll < 5)  { return await killMinion(options); }
      if (roll < 25) { return await addInjury(criticalInjuries, options); }
                       return await addInjury(painfulInjuries, options);
    }
  }

  // TODO: When injured while out hunting a minion has a 5% chance of dying, or
  //       at least getting mostly killed. Killing minsions needs to be
  //       implemented though before this can be done.
  async function killMinion(options) {
    console.log(`TODO: ${options.character.name} was killed while out hunting`);
  }

  // Add an injury to the character.
  async function addInjury(possibleInjuries, options) {
    let cock = await options.character.getCock();
    let pussy = await options.character.getPussy();
    let tits = await options.character.getTits();

    let pick = Random.from(possibleInjuries.filter(possible => {
      return meetsRequirement(possible, extend(options,{ cock, pussy, tits }));
    }));

    let injury = await options.character.addInjury({
      location: pick.location,
      type: pick.type,
      level: pick.level,
    });

    let story = await Weaver.weaveWithCharacter(pick.story,'H',options.character);

    console.log("=== Hunting Injury ===")
    console.log(story)
    console.log(injury)

    return { injury, story }
  }

  // Hunting is a slightly dangerous job, and there's a chance that you'll be
  // wounded. Having good equipment, physical strength, skill, and success all
  // reduce the chance of injury. This will fall somewhere beteen 0 and 30%,
  // though dropping completely to 0 requires maxed physical.
  function injuryChance(options) {
    let danger  = 5 - Math.min(5, Math.floor(options.character.physical/20));
        danger += 6 - (options.skill*2);
        danger += 9 - (options.tier*3);
        danger += options.success ? 0 : 10;

    return danger;
  }

  // We need to filter the list of all possible injuries down to the ones
  // that can be applied to this character. The requirements for hunting
  // injuries are unique to the class. I don't think they're used anywhere
  // else, but if they are they can be moved into the central scrutinizer
  // I suppose.
  //
  // Recognized Requirements: success, failure, tier-0, species-rat
  function meetsRequirement(possibleInjury, options) {
    let valid = true;

    if (possibleInjury.location == 'cock'  && options.cock == null)  { valid = false; }
    if (possibleInjury.location == 'pussy' && options.pussy == null) { valid = false; }
    if (possibleInjury.location == 'tits'  && options.tits == null)  { valid = false; }

    each((possibleInjury.requires||[]), requirement => {
      if (requirement == 'failure'     && options.success) { valid = false; }
      if (requirement == 'success'     && !options.success) { valid = false; }
      if (requirement == 'tier-0'      && options.tier != 0) { valid = false; }
      if (requirement == 'species-rat' && options.character.speciesCode != 'rat') { valid = false; }
    });

    return valid;
  }

  return {
    resolve,
    injuryChance,
    addPossibleInjury,
  };

})();
