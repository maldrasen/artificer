Abuser.HeadAbuser = (function() {

  async function addInjury(character, hazard) {
    const body = await character.getBody();
    const mouth = await character.getMouth();

    if (hazard.type == 'blight') { addBlightInjury(character, mouth, hazard); }
    if (hazard.type == 'burn')   { addBurnInjury(character, mouth, hazard);   }
    if (hazard.type == 'cut')    { addCutInjury(character, mouth, hazard);   }
    if (hazard.type == 'smash')  { addSmashInjury(character, mouth, hazard);  }

    const describer = new BodyDescriber({ character, body, mouth });
    await describer.updateDescription();
    await mouth.save();

    return mouth;
  }

  function addBlightInjury(character, mouth, hazard) {}
  function addBurnInjury(character, mouth, hazard) {}

  function addCutInjury(character, mouth, hazard) {
    mouth.cutLevel = Abuser.raiseLevel(mouth.cutLevel, hazard.level, 5);
    mouth.cutCount += 1;
    mouth.cutHealing = 0;
  }

  function addSmashInjury(character, mouth, hazard) {
    mouth.smashLevel = Abuser.raiseLevel(mouth.smashLevel, hazard.level, 5);
    mouth.smashCount += 1;
    mouth.smashHealing = 0;

    if (mouth.smashTeethMissing < 10) {
      if (hazard.level == 3 && true || Random.upTo(10) == 0) { mouth.smashTeethMissing += 1; }
      if (hazard.level == 4 && true || Random.upTo(4) == 0)  { mouth.smashTeethMissing += Random.between(1,2); }
      if (hazard.level == 5 && true || Random.upTo(2) == 0)  { mouth.smashTeethMissing += Random.between(1,4); }
    }
  }

  return { addInjury };

})();
