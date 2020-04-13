Abuser.BodyAbuser = (function() {

  // Add a body injury from a hazard or at least an object that looks like a
  // hazard.
  async function addInjury(character, hazard) {
    const body = await character.getBody();

    if (hazard.type == 'pierce') { addPierceInjury(character, body, hazard); }

    const describer = new BodyDescriber({ character, body });
    await describer.updateDescription();

    return body;
  }

  // Pierce injuries are rather simple. If you've been stabbed, and it's not
  // fatal, than it's probably in the gut.
  function addPierceInjury(character, body, hazard) {
    body.pierceLevel = Abuser.raiseLevel(body.pierceLevel, hazard.level, 5);
    body.pierceCount += hazard.count || 1;
    body.pierceHealing = 0;
  }

  return { addInjury };

})();
