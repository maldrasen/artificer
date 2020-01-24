Role.Injuries = (function() {

  async function applyInjury(character, context, hazardFunction) {
    let injury = await getInjury(context, hazardFunction);
    await character.addInjury(injury);
    return Weaver.weave(injury.story, context);
  }

  async function getInjury(context, hazardFunction) {
    return Random.from(ArrayUtility.compact(
      await Promise.all(hazardFunction().map(async hazard => {
        if (await CentralScrutinizer.meetsRequirements(hazard.requires, context)) { return hazard; }
      }))
    ));
  }

  return { applyInjury, getInjury };

})();
