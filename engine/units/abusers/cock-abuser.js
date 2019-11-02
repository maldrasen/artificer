Abuser.CockAbuser = (function() {

  async function addInjury(character, hazard) {
    const cock = await character.getCock();

    if (hazard.type == 'blight') { addBlightInjury(character, cock, hazard); }
    if (hazard.type == 'burn')   { addBurnInjury(character, cock, hazard);   }
    if (hazard.type == 'smash')  { addSmashInjury(character, cock, hazard);  }

    const describer = new CockDescriber({ character, cock });
    await describer.updateDescription();

    return cock;
  }

  // A Cock:Blight injury can have details set to specify cock or balls.
  //
  // place[cock, balls, all] (optional)
  //       Specify where the cock is blighted.
  //
  function addBlightInjury(character, cock, hazard) {
    const place = ObjectUtility.fetch(hazard,'details','place') || Random.from(['cock','balls']);

    cock.blightLevel = Abuser.raiseLevel(cock.blightLevel, hazard.level, 5);
    cock.blightCount += 1;
    cock.blightHealing = 0;
    cock.blightPlace = leftRightOrAll(cock.blightPlace, place)
  }

  function addBurnInjury(character, cock, hazard) {}
  function addSmashInjury(character, cock, hazard) {}

  // Some cock injuries, like blight, can effect the cock, or the balls, or
  // both.
  function cockBallsOrAll(current, place) {
    if (current == 'all') { return 'all'; }
    if (place == 'all')   { return 'all'; }
    if (place == 'cock')  { return (current == 'balls') ? 'all' : 'cock' }
    if (place == 'balls') { return (current == 'cock') ? 'all' : 'balls' }
  }

  return { addInjury };

})();
