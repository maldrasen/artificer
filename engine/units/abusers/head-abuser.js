Abuser.HeadAbuser = (function() {

  async function addInjury(character, hazard) {
    const body = await character.getBody();

    if (hazard.type == 'blight') { addBlightInjury(character, body, hazard); }
    if (hazard.type == 'burn')   { addBurnInjury(character, body, hazard);   }
    if (hazard.type == 'smash')  { addSmashInjury(character, body, hazard);  }

    const describer = new BodyDescriber({ character, body });
    await describer.updateDescription();

    return body;
  }

  function addBlightInjury(character, body, hazard) {}
  function addBurnInjury(character, body, hazard) {}
  function addSmashInjury(character, body, hazard) {}

  // function updateDetails(injury, hazard) {
  //   if (injury.damageType == 'blight') { return updateBlight(injury, hazard); }
  //   if (injury.damageType == 'burn')   { return updateBurn(injury, hazard);   }
  //   if (injury.damageType == 'cut')    { return updateCut(injury, hazard);    }
  //   if (injury.damageType == 'pierce') { return updatePierce(injury, hazard); }
  //   if (injury.damageType == 'rip')    { return updateRip(injury, hazard);    }
  //   if (injury.damageType == 'smash')  { return updateSmash(injury, hazard);  }
  //   throw `Unknown damage type ${injury.damageType}`;
  // }
  //
  // function updateBlight(injury, hazard) { return {}; }
  // function updateBurn(injury, hazard)   { return {}; }
  // function updateCut(injury, hazard)    { return {}; }
  // function updatePierce(injury, hazard) { return {}; }
  // function updateRip(injury, hazard)    { return {}; }
  //
  // // If injury level is higher than three then assume some teeth have been
  // // knocked out. Otherwise details can remain blank.
  // function updateSmash(injury, hazard)  {
  //   let details = injury.details;
  //
  //   if (injury.level < 3) { return details; }
  //
  //   if (details.missingTeeth == null) {
  //     details.missingTeeth = 0;
  //   }
  //   if (details.missingTeeth < 10) {
  //     if (injury.level == 3) { details.missingTeeth += 1; }
  //     if (injury.level == 4) { details.missingTeeth += Random.between(1,2); }
  //     if (injury.level == 5) { details.missingTeeth += Random.between(1,4); }
  //   }
  //   return details;
  // }
  //
  // async function buildDescription(injury, details) {
  //   if (injury.damageType == 'blight') { return await describeBlight(injury, details); }
  //   if (injury.damageType == 'burn')   { return await describeBurn(injury, details);   }
  //   if (injury.damageType == 'cut')    { return await describeCut(injury, details);    }
  //   if (injury.damageType == 'pierce') { return await describePierce(injury, details); }
  //   if (injury.damageType == 'rip')    { return await describeRip(injury, details);    }
  //   if (injury.damageType == 'smash')  { return await describeSmash(injury, details);  }
  //   throw `Unknown damage type ${injury.damageType}`;
  // }
  //
  // async function describeBlight(injury, details) { return `(TODO: Describe Head Blight - ${injury.level})`; }
  // async function describeBurn(injury, details)   { return `(TODO: Describe Head Burn - ${injury.level})`; }
  // async function describeCut(injury, details)    { return `(TODO: Describe Head Cut - ${injury.level})`; }
  // async function describePierce(injury, details) { return `(TODO: Describe Head Pierce - ${injury.level})`; }
  // async function describeRip(injury, details)    { return `(TODO: Describe Head Rip - ${injury.level})`; }
  //
  // // If there are no details, assume a bruised face, like a black eye. Details
  // // can specify mouth damage, such as missing teeth.
  // async function describeSmash(injury, details)  {
  //   let desc = smashPartOne(injury.level);
  //
  //   if (details.missingTeeth == 1) { desc += `It looks like {{C::gender.he}}'s missing a tooth as well.` }
  //   if (details.missingTeeth == 2) { desc += `It looks like {{C::gender.he}} may be missing a couple of teeth as well.` }
  //   if (details.missingTeeth == 3) { desc += `It looks like {{C::gender.he}} may be missing a few teeth as well.` }
  //   if (details.missingTeeth > 3 || details.missingTeeth <= 6) {
  //     desc += `It looks like {{C::gender.he}} may be missing some teeth too, at least ${EnglishUtility.numberInEnglish(details.missingTeeth)} from the looks of it.`
  //   }
  //   if (details.missingTeeth > 6) { desc += `It looks like a significant number of teeth have been knocked out of {{C::gender.his}} head too.` }
  //
  //   return desc;
  // }
  //
  // function smashPartOne(level) {
  //   if (level == 1) { return `{{C::gender.He}} has a black eye, badly swollen from some recent impact there.` }
  //
  //   if (level < 3) { return `{{C::gender.He}}'s looking pretty beat up. {{C::gender.His}} eye is swollen and
  //       one of {{C::gender.his}} lips has split open.` }
  //
  //   if (level < 5) { return `{{C::gender.He}} looks significantly beaten up. One of {{C::gender.his}} has
  //       completely swollen shut and {{C::gender.he}} has a split lip.` }
  //
  //   if (level < 7) { return `{{C::gender.His}} face has been badly beaten. Both of {{C::gender.his}} eyes have
  //       completely swollen shut and {{C::gender.he}} has a split lip.`}
  //
  //   if (level < 9) { return `{{C::gender.His}} face has been severely beaten. {{C::gender.His}} nose is
  //       probably broken, both of {{C::gender.his}} eyes have completely swollen shut, and {{C::gender.his}} lips have
  //       split open in several places.` }
  //
  //   return `{{C::gender.His}} face has been savagly beaten. {{C::gender.His}} nose is clearly broken, both of
  //     {{C::gender.his}} eyes have completely swollen shut, and {{C::gender.his}} lips have completely ripped apart.`;
  // }

  return { addInjury };

})();
