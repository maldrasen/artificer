Abuser.BodyAbuser = (function() {

  function updateDetails(injury, hazard) {
    if (injury.damageType == 'blight') { return updateBlight(injury, hazard); }
    if (injury.damageType == 'burn')   { return updateBurn(injury, hazard);   }
    if (injury.damageType == 'cut')    { return updateCut(injury, hazard);    }
    if (injury.damageType == 'pierce') { return updatePierce(injury, hazard); }
    if (injury.damageType == 'rip')    { return updateRip(injury, hazard);    }
    if (injury.damageType == 'smash')  { return updateSmash(injury, hazard);  }
    throw `Unknown damage type ${injury.damageType}`;
  }

  function updateBlight(injury, hazard) { return {}; }
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

  async function describeBlight(injury, details) { return `(TODO: Describe Body Blight - ${injury.level})`; }
  async function describeBurn(injury, details)   { return `(TODO: Describe Body Burn - ${injury.level})`; }
  async function describeCut(injury, details)    { return `(TODO: Describe Body Cut - ${injury.level})`; }
  async function describePierce(injury, details) { return `(TODO: Describe Body Pierce - ${injury.level})`; }
  async function describeRip(injury, details)    { return `(TODO: Describe Body Rip - ${injury.level})`; }
  async function describeSmash(injury, details)  { return `(TODO: Describe Body Smash - ${injury.level})`; }

  return { updateDetails, buildDescription };

})();
