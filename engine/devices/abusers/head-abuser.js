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

  function addSmashInjury(character, body, hazard) {
    body.smashLevel = Abuser.raiseLevel(body.smashLevel, hazard.level, 5);
    body.smashCount += 1;
    body.smashHealing = 0;

    if (body.smashTeethMissing < 10) {
      if (hazard.level == 3 && Random.upTo(10) == 0) { body.smashTeethMissing += 1; }
      if (hazard.level == 4 && Random.upTo(4) == 0)  { body.smashTeethMissing += Random.between(1,2); }
      if (hazard.level == 5 && Random.upTo(2) == 0)  { body.smashTeethMissing += Random.between(1,4); }
    }
  }

  return { addInjury };

})();
