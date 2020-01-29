Abuser.TitsAbuser = (function() {

  async function addInjury(character, hazard) {
    const tits = await character.getTits();

    if (hazard.type == 'blight') { addBlightInjury(character, tits, hazard); }
    if (hazard.type == 'burn')   { addBurnInjury(character, tits, hazard);   }
    if (hazard.type == 'smash')  { addSmashInjury(character, tits, hazard);  }

    const describer = new TitsDescriber({ character, tits });
    await describer.updateDescription();

    return tits;
  }

  function addBlightInjury(character, tits, hazard) {}
  function addBurnInjury(character, tits, hazard) {}

  // A Tits:Smash injury can have details set to specify which breast, and also
  // the impact shape.
  //
  // place[left, right, all] (optional)
  //       Specify where the tit is smashed. If blank, left or right will be
  //       picked at random.
  //
  // shape[hoof, hand] (optional)
  //       Specify the shape of the resulting bruise, otherwise no shape will
  //       be described. New injuries with different shapes will overwrite the
  //       previous shape.
  //
  function addSmashInjury(character, tits, hazard) {
    const place = ObjectUtility.fetch(hazard,'details','place') || Random.from(['left','right']);
    const shape = ObjectUtility.fetch(hazard,'details','shape');

    tits.smashLevel = Abuser.raiseLevel(tits.smashLevel, hazard.level, 5);
    tits.smashCount += 1;
    tits.smashHealing = 0;
    tits.smashPlace = leftRightOrAll(tits.smashPlace, place)

    if (shape) { tits.smashShape = shape; }
  }

  // Multiple damage types will use the place:[left, right, all] detail to
  // indicate on which breast there is damage.
  function leftRightOrAll(current, place) {
    if (current == 'all') { return 'all'; }
    if (place == 'all')   { return 'all'; }
    if (place == 'left')  { return (current == 'right') ? 'all' : 'left' }
    if (place == 'right') { return (current == 'left') ? 'all' : 'right' }
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
  // function updateBlight(injury, hazard) {
  //   let details = injury.details;
  //
  //   if (hazard.details.nipples == 'single') {
  //     if (details.nipples == 'both')   { details.nipples = 'all';    }
  //     if (details.nipples == 'single') { details.nipples = 'both';   }
  //     if (details.nipples == null)     { details.nipples = 'single'; }
  //   }
  //   if (hazard.details.tits == 'single') {
  //     if (details.tits == 'both')   { details.tits = 'all';    }
  //     if (details.tits == 'single') { details.tits = 'both';   }
  //     if (details.tits == null)     { details.tits = 'single'; }
  //   }
  //
  //   return details;
  // }
  //
  // }
  //
  // async function describeBlight(injury, details) {
  //   const character = await Character.lookup(injury.character_id);
  //
  //   if (character.speciesCode == 'rat') {
  //     return await describeBlightedRatTits(character, injury, details);
  //   }
  //
  //   return `(TODO: Describe Tits Blight - ${injury.level})`;
  // }
  //
  // async function describeBurn(injury, details)   { return `(TODO: Describe Tits Burn - ${injury.level})`; }
  // async function describeCut(injury, details)    { return `(TODO: Describe Tits Cut - ${injury.level})`; }
  // async function describePierce(injury, details) { return `(TODO: Describe Tits Pierce - ${injury.level})`; }
  // async function describeRip(injury, details)    { return `(TODO: Describe Tits Rip - ${injury.level})`; }
  // async function describeSmash(injury, details)  { return `(TODO: Describe Tits Smash - ${injury.level})`; }
  //
  // Rats nees unique descriptions because of their multiple tits, and blight
  // injuries also require their own descriptions, so this is hyper spcific to
  // rats with blight injuries in their nipples and tits. This should probably
  // be a subclass even. I think this is too much for now, and that I should
  // just put this on hold until the nipple descriptions are complete at least.
  // async function describeBlightedRatTits(character, injury, details) {
  //   const tits = await character.getTits();
  //   const nipples = await character.getNipples();
  //
  //   // In cases where there's just a single blighted nipple we can harness the
  //   // tits describer to get the base description.
  //   if (details.tits == null && details.nipples == 'single') {
  //     return `${TitsDescriber.ratTits(injury, character, tits)} ${blightedNipple(character, nipples)}`
  //   }
  //   if (details.tits == null && details.nipples == 'both') {
  //     // Hmm, two blighted nipples should really be more like 4 for rats.
  //   }
  //   if (details.tits == null && details.nipples == 'all') {
  //     // All nipples are blighted.
  //   }
  //
  //   return `(TODO: Needs more blighted tits descriptions.)`
  // }
  //
  // function blightedNipple(injury, character, nipples) {
  //   return "With a blighted nipple."
  // }

  return { addInjury };

})();
