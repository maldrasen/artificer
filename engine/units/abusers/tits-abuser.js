Abuser.TitsAbuser = (function() {

  function updateDetails(injury) {
    if (injury.damageType == 'blight') { return updateBlight(injury); }
    if (injury.damageType == 'burn')   { return updateBurn(injury);   }
    if (injury.damageType == 'cut')    { return updateCut(injury);    }
    if (injury.damageType == 'pierce') { return updatePierce(injury); }
    if (injury.damageType == 'rip')    { return updateRip(injury);    }
    if (injury.damageType == 'smash')  { return updateSmash(injury);  }
    throw `Unknown damage type ${injury.damageType}`;
  }

  function updateBlight(injury) { return {}; }
  function updateBurn(injury)   { return {}; }
  function updateCut(injury)    { return {}; }
  function updatePierce(injury) { return {}; }
  function updateRip(injury)    { return {}; }
  function updateSmash(injury)  { return {}; }

  function buildDescription(injury, details) {
    if (injury.damageType == 'blight') { return describeBlight(injury, details); }
    if (injury.damageType == 'burn')   { return describeBurn(injury, details);   }
    if (injury.damageType == 'cut')    { return describeCut(injury, details);    }
    if (injury.damageType == 'pierce') { return describePierce(injury, details); }
    if (injury.damageType == 'rip')    { return describeRip(injury, details);    }
    if (injury.damageType == 'smash')  { return describeSmash(injury, details);  }
    throw `Unknown damage type ${injury.damageType}`;
  }

  function describeBlight(injury, details) { return `(TODO: Describe Tits Blight - ${injury.level})`; }
  function describeBurn(injury, details)   { return `(TODO: Describe Tits Burn - ${injury.level})`; }
  function describeCut(injury, details)    { return `(TODO: Describe Tits Cut - ${injury.level})`; }
  function describePierce(injury, details) { return `(TODO: Describe Tits Pierce - ${injury.level})`; }
  function describeRip(injury, details)    { return `(TODO: Describe Tits Rip - ${injury.level})`; }
  function describeSmash(injury, details)  { return `(TODO: Describe Tits Smash - ${injury.level})`; }

  return { updateDetails, buildDescription };

})();
