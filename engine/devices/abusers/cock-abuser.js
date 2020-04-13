Abuser.CockAbuser = (function() {

  async function addInjury(character, hazard) {
    const cock = await character.getCock();

    if (cock == null) {
      throw `Only call the cock abuser when the character has a cock.`
    }

    if (hazard.type == 'blight') { await addBlightInjury(character, cock, hazard); }
    if (hazard.type == 'burn')   { await addBurnInjury(character, cock, hazard);   }
    if (hazard.type == 'smash')  { await addSmashInjury(character, cock, hazard);  }

    const context = new WeaverContext();
    await context.addCharacter('C',character);

    const describer = new CockDescriber(context);
    await describer.updateDescription();
  }

  // A Cock:Blight injury can have details set to specify cock or balls.
  //
  // place[cock, balls, all] (optional)
  //       Specify where the cock is blighted.
  //
  async function addBlightInjury(character, cock, hazard) {
    const place = ObjectUtility.fetch(hazard,'details','place') || Random.from(['cock','balls']);

    cock.blightLevel = Abuser.raiseLevel(cock.blightLevel, hazard.level, 5);
    cock.blightCount += hazard.count || 1;
    cock.blightHealing = 0;
    cock.blightPlace = cockBallsOrAll(cock.blightPlace, place);

    await cock.save();
  }

  async function addBurnInjury(character, cock, hazard) {}
  async function addSmashInjury(character, cock, hazard) {}

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
