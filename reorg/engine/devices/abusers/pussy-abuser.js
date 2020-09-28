Abuser.PussyAbuser = (function() {

  async function addInjury(character, hazard) {
    const pussy = await character.getPussy();

    if (pussy == null) {
      throw `Only call the pussy abuser when the character has a pussy.`
    }

    if (hazard.type == 'blight') { await addBlightInjury(character, pussy, hazard); }
    if (hazard.type == 'burn')   { await addBurnInjury(character, pussy, hazard);   }
    if (hazard.type == 'smash')  { await addSmashInjury(character, pussy, hazard);  }

    const context = new Context();
    await context.addCharacter('C',character);

    const describer = new PussyDescriber(context);
    await describer.updateDescription();
  }

  // Assume a blighted pussy covers the entire pussy, from the labia into the
  // womb.
  async function addBlightInjury(character, pussy, hazard) {
    pussy.blightLevel = Abuser.raiseLevel(pussy.blightLevel, hazard.level, 5);
    pussy.blightCount += hazard.count || 1;
    pussy.blightHealing = 0;
    await pussy.save();
  }

  async function addBurnInjury(character, pussy, hazard) {
    pussy.burnLevel = Abuser.raiseLevel(pussy.burnLevel, hazard.level, 5);
    pussy.burnCount += hazard.count || 1;
    pussy.burnHealing = 0;
    await pussy.save();
  }

  async function addSmashInjury(character, pussy, hazard) {
    pussy.smashLevel = Abuser.raiseLevel(pussy.smashLevel, hazard.level, 5);
    pussy.smashCount += hazard.count || 1;
    pussy.smashHealing = 0;
    await pussy.save();
  }

  return { addInjury };

})();
