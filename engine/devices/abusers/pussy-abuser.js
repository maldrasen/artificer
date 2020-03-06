Abuser.PussyAbuser = (function() {

  async function addInjury(character, hazard) {
    const pussy = await character.getPussy();

    if (pussy == null) {
      throw `Only call the pussy abuser when the character has a pussy.`
    }

    if (hazard.type == 'blight') { addBlightInjury(character, pussy, hazard); }
    if (hazard.type == 'burn')   { addBurnInjury(character, pussy, hazard);   }
    if (hazard.type == 'smash')  { addSmashInjury(character, pussy, hazard);  }

    const describer = new PussyDescriber({ character, pussy });
    await describer.updateDescription();

    return pussy;
  }

  // Assume a blighted pussy covers the entire pussy, from the labia into the
  // womb.
  function addBlightInjury(character, pussy, hazard) {
    pussy.blightLevel = Abuser.raiseLevel(pussy.blightLevel, hazard.level, 5);
    pussy.blightCount += hazard.count || 1;
    pussy.blightHealing = 0;
  }

  function addBurnInjury(character, pussy, hazard) {
    pussy.burnLevel = Abuser.raiseLevel(pussy.burnLevel, hazard.level, 5);
    pussy.burnCount += hazard.count || 1;
    pussy.burnHealing = 0;
  }

  function addSmashInjury(character, pussy, hazard) {
    pussy.smashLevel = Abuser.raiseLevel(pussy.smashLevel, hazard.level, 5);
    pussy.smashCount += hazard.count || 1;
    pussy.smashHealing = 0;
  }

  return { addInjury };

})();
