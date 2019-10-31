global.Abuser = (function() {

  function lookup(code) {
    return {
      // anus: Abuser.AnusAbuser,
      // body: Abuser.BodyAbuser,
      // cock: Abuser.CockAbuser,
      // head: Abuser.HeadAbuser,
      // pussy: Abuser.PussyAbuser,
      tits: Abuser.TitsAbuser,
    }[code];
  }

  // Get the new injury level based on the current injury level and the level
  // of the injury being applied.
  //   - When Higher: Always take the higher level.
  //   - When Max: Always return max level.
  //   - When Equal: There's a 25% chance to increase the level to the next
  //         level higher. Might tweek this rate later or adjust the rate
  //         depending on the level and damage type.
  //
  function raiseLevel(currentLevel, newLevel, maxLevel) {
    if (currentLevel == null || currentLevel < newLevel) { return newLevel }
    if (newLevel < currentLevel || currentLevel == maxLevel) { return currentLevel; }

    return (Random.upTo(4) == 0) ? newLevel+1 : newLevel;
  }

  return { lookup, raiseLevel };

})();
