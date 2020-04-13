Abuser.BodyAbuser = (function() {

  // Add a body injury from a hazard or at least an object that looks like a
  // hazard.
  async function addInjury(character, hazard) {
    const body = await character.getBody();

    if (hazard.type == 'pierce') { await addPierceInjury(character, body, hazard); }

    const context = new WeaverContext();
    await context.addCharacter('C',character);

    const describer = new BodyDescriber(context);
    await describer.updateDescription();
  }

  // Pierce injuries are rather simple. If you've been stabbed, and it's not
  // fatal, than it's probably in the gut.
  async function addPierceInjury(character, body, hazard) {
    body.pierceLevel = Abuser.raiseLevel(body.pierceLevel, hazard.level, 5);
    body.pierceCount += hazard.count || 1;
    body.pierceHealing = 0;
    await body.save();
  }

  return { addInjury };

})();
