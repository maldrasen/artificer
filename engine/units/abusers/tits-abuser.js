Abuser.TitsAbuser = (function() {

  function updateDetails(injury, hazard) {
    if (injury.damageType == 'blight') { return updateBlight(injury, hazard); }
    if (injury.damageType == 'burn')   { return updateBurn(injury, hazard);   }
    if (injury.damageType == 'cut')    { return updateCut(injury, hazard);    }
    if (injury.damageType == 'pierce') { return updatePierce(injury, hazard); }
    if (injury.damageType == 'rip')    { return updateRip(injury, hazard);    }
    if (injury.damageType == 'smash')  { return updateSmash(injury, hazard);  }
    throw `Unknown damage type ${injury.damageType}`;
  }

  // Apply a blight injury to a breast or nipple. The details can have the
  // following options:
  //
  //   nipple:'single'     Apply blight to a single nipple.
  //   nipple:'both'       Apply blight to two nipples.
  //   nipple:'all'        The same as both, unless a character has multiple breasts.
  //   tit:'single'        Apply blight to one breast.
  //   tit:'both'          Apply blight to two breasts.
  //   tit:'all'           The same as both, unless a character has multiple breasts.
  //
  // As blight is applied it spreads from single, to both, to all, even if a
  // character has 12 nipples they'll get blight in all of them because it
  // spreads through the body.
  function updateBlight(injury, hazard) {
    let details = injury.details;

    if (hazard.details.nipples == 'single') {
      if (details.nipples == 'both')   { details.nipples = 'all';    }
      if (details.nipples == 'single') { details.nipples = 'both';   }
      if (details.nipples == null)     { details.nipples = 'single'; }
    }
    if (hazard.details.tits == 'single') {
      if (details.tits == 'both')   { details.tits = 'all';    }
      if (details.tits == 'single') { details.tits = 'both';   }
      if (details.tits == null)     { details.tits = 'single'; }
    }

    return details;
  }

  function updateBurn(injury, hazard)   { return {}; }
  function updateCut(injury, hazard)    { return {}; }
  function updatePierce(injury, hazard) { return {}; }
  function updateRip(injury, hazard)    { return {}; }
  function updateSmash(injury, hazard)  { return {}; }

  async function buildDescription(injury, details) {
    if (injury.damageType == 'blight') { return await describeBlight(injury, details); }
    if (injury.damageType == 'burn')   { return await describeBurn(injury, details);   }
    if (injury.damageType == 'cut')    { return await describeCut(injury, details);    }
    if (injury.damageType == 'pierce') { return await describePierce(injury, details); }
    if (injury.damageType == 'rip')    { return await describeRip(injury, details);    }
    if (injury.damageType == 'smash')  { return await describeSmash(injury, details);  }
    throw `Unknown damage type ${injury.damageType}`;
  }

  async function describeBlight(injury, details) {
    const character = await Character.findByPk(injury.character_id);

    if (character.speciesCode == 'rat') {
      return await describeBlightedRatTits(character, injury, details);
    }

    return `(TODO: Describe Tits Blight - ${injury.level})`;
  }

  async function describeBurn(injury, details)   { return `(TODO: Describe Tits Burn - ${injury.level})`; }
  async function describeCut(injury, details)    { return `(TODO: Describe Tits Cut - ${injury.level})`; }
  async function describePierce(injury, details) { return `(TODO: Describe Tits Pierce - ${injury.level})`; }
  async function describeRip(injury, details)    { return `(TODO: Describe Tits Rip - ${injury.level})`; }
  async function describeSmash(injury, details)  { return `(TODO: Describe Tits Smash - ${injury.level})`; }

  // Rats nees unique descriptions because of their multiple tits, and blight
  // injuries also require their own descriptions, so this is hyper spcific to
  // rats with blight injuries in their nipples and tits. This should probably
  // be a subclass even. I think this is too much for now, and that I should
  // just put this on hold until the nipple descriptions are complete at least.
  async function describeBlightedRatTits(character, injury, details) {
    const tits = await character.getTits();
    const nipples = await character.getNipples();

    // In cases where there's just a single blighted nipple we can harness the
    // tits describer to get the base description.
    if (details.tits == null && details.nipples == 'single') {
      return `${TitsDescriber.ratTits(injury, character, tits)} ${blightedNipple(character, nipples)}`
    }
    if (details.tits == null && details.nipples == 'both') {
      // Hmm, two blighted nipples should really be more like 4 for rats.
    }
    if (details.tits == null && details.nipples == 'all') {
      // All nipples are blighted.
    }

    return `(TODO: Needs more blighted tits descriptions.)`
  }

  function blightedNipple(injury, character, nipples) {
    return "With a blighted nipple."
  }

  return { updateDetails, buildDescription };

})();
