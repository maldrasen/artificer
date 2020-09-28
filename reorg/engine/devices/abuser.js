global.Abuser = (function() {

  function lookup(code) {
    return {
      anus:  Abuser.AnusAbuser,
      body:  Abuser.BodyAbuser,
      cock:  Abuser.CockAbuser,
      head:  Abuser.HeadAbuser,
      pussy: Abuser.PussyAbuser,
      tits:  Abuser.TitsAbuser,
    }[code];
  }

  // Normally injuries are chosen randomly and then the appropriate abuser is
  // found through the lookup() function. Sometimes we have specific injuries
  // to add though that aren't from the randomized hazards. They can be added
  // through these functions.
  async function addAnusInjury(character, hazard)  { await Abuser.AnusAbuser.addInjury(character, hazard);  }
  async function addBodyInjury(character, hazard)  { await Abuser.BodyAbuser.addInjury(character, hazard);  }
  async function addCockInjury(character, hazard)  { await Abuser.CockAbuser.addInjury(character, hazard);  }
  async function addHeadInjury(character, hazard)  { await Abuser.HeadAbuser.addInjury(character, hazard);  }
  async function addPussyInjury(character, hazard) { await Abuser.PussyAbuser.addInjury(character, hazard); }
  async function addTitsInjury(character, hazard)  { await Abuser.TitsAbuser.addInjury(character, hazard);  }

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

  return {
    lookup,
    addAnusInjury,
    addBodyInjury,
    addCockInjury,
    addHeadInjury,
    addPussyInjury,
    addTitsInjury,
    raiseLevel
  };

})();
