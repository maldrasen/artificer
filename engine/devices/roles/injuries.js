Role.Injuries = (function() {

  async function getInjury(context) {
    return Random.from(ArrayUtility.compact(
      await Promise.all(Hazard.hinterlandsForaging().map(async hazard => {
        if (await CentralScrutinizer.meetsRequirements(hazard.requires, context)) {
          return hazard;
        }
      }))
    ));
  }

  return { getInjury };

})();
