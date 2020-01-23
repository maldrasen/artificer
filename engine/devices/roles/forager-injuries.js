Role.Forager.Injuries = (function() {

  async function getInjuryFor(character) {
    console.log("Find Forage Injury For ",character.name);
  }

  // // This function finds an appropriate hazard from and adds it to the
  // // character. It then weaves the story from the hazard and returns it for
  // // display in the report.
  // async function addInjury(possibleInjuries, options) {
  //   let cock = await options.character.getCock();
  //   let pussy = await options.character.getPussy();
  //   let tits = await options.character.getTits();
  //
  //   let hazard = Random.from(possibleInjuries.filter(possible => {
  //     return meetsRequirement(possible, extend(options,{ cock, pussy, tits }));
  //   }));
  //
  //   // This might happen in dev for a while, but will eventually stop happening
  //   // once I've added enough hazards. This should eventually throw an exception
  //   // instead.
  //   if (hazard == null) { return false; }
  //
  //   let injury = await options.character.addInjury(hazard);
  //   let story = await Weaver.weaveWithCharacter(hazard.story,'H',options.character);
  //
  //   return { hazard, story };
  // }
  //
  // // Hunting is a slightly dangerous job, and there's a chance that you'll be
  // // wounded. Having good equipment, physical strength, skill, and success all
  // // reduce the chance of injury. This will fall somewhere beteen 0 and 30%,
  // // though dropping completely to 0 requires maxed physical.
  // function injuryChance(options) {
  //   let danger  = 5 - Math.min(5, Math.floor(options.character.physical/20));
  //       danger += 6 - (options.skill*2);
  //       danger += 9 - (options.tier*3);
  //       danger += options.success ? 0 : 10;
  //
  //   return danger;
  // }
  //
  // // We need to filter the list of all possible injuries down to the ones
  // // that can be applied to this character. The requirements for hunting
  // // injuries are unique to the class. I don't think they're used anywhere
  // // else.... Yeah, no. Foraging will probably use these too.
  // //
  // // Recognized Requirements:
  // //    success           The hunt was successful
  // //    failure           The hunt was a failure
  // //    tier-0            The hunter has exactly tier 0 equipment (no equipment)
  // //    species-scaven    A scaven is hunting
  // //    species-biter     The hunter has a bite attack
  // function meetsRequirement(hazard, options) {
  //   let valid = true;
  //
  //   if (hazard.location == 'cock'  && options.cock == null)  { valid = false; }
  //   if (hazard.location == 'pussy' && options.pussy == null) { valid = false; }
  //   if (hazard.location == 'tits'  && options.tits == null)  { valid = false; }
  //
  //   each((hazard.requires||[]), requirement => {
  //     if (requirement == 'failure'        && options.success) { valid = false; }
  //     if (requirement == 'success'        && !options.success) { valid = false; }
  //     if (requirement == 'tier-0'         && options.tier != 0) { valid = false; }
  //     if (requirement == 'species-scaven' && options.character.speciesCode != 'scaven') { valid = false; }
  //     if (requirement == 'species-biter'  && options.character.biter == false) { valid = false; }
  //   });
  //
  //   return valid;
  // }
  //
  // return {
  //   resolve,
  //   injuryChance,
  //   meetsRequirement
  // };

  return { getInjuryFor };

})();
