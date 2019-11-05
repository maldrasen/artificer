global.PlayerScrutinizer = (function() {

  async function check(requirement, context) {
    const player = await lookupPlayer(context);

    if (requirement == 'player.always-fucks-men')              { return await Flag.equals('player.fucksMen','always'); }
    if (requirement == 'player.sometimes-fucks-men')           { return await Flag.equals('player.fucksMen','maybe'); }
    if (requirement == 'player.never-fucks-men')               { return await Flag.equals('player.fucksMen','never'); }
    if (requirement == 'player.always-fucks-women')            { return await Flag.equals('player.fucksWomen','always'); }
    if (requirement == 'player.sometimes-fucks-women')         { return await Flag.equals('player.fucksWomen','maybe'); }
    if (requirement == 'player.never-fucks-women')             { return await Flag.equals('player.fucksWomen','never'); }
    if (requirement == 'player.always-fucks-futas')            { return await Flag.equals('player.fucksFutas','always'); }
    if (requirement == 'player.sometimes-fucks-futas')         { return await Flag.equals('player.fucksFutas','maybe'); }
    if (requirement == 'player.never-fucks-futas')             { return await Flag.equals('player.fucksFutas','never'); }
    if (requirement == 'player.accepts-men')                   { return await genderPreferenceScores().male > 0 }
    if (requirement == 'player.accepts-no-men')                { return await genderPreferenceScores().male == 0 }
    if (requirement == 'player.prefers-men')                   { return await playerPrefersMen(); }
    if (requirement == 'player.prefers-women')                 { return await playerPrefersWomen(); }
    if (requirement == 'player.prefers-men-over-women')        { return await playerPrefersMenOverWomen(); }
    if (requirement == 'player.prefers-women-over-men')        { return await playerPrefersWomenOverMen(); }
    if (requirement == 'player.prefers-neither-men-nor-women') { return await playerPrefersNeitherMenNorWomen(); }

    return CharacterScrutinizer.check(requirement.match(/player\.(.+)/)[1], player);
  }

  async function lookupPlayer(context) {
    let player = context.get('P');
    if (player) { return player; }
    await context.addPlayer();
    return context.get('P');
  }

  // These functions need to look at the sexuality flags to determine if any
  // gender is more preferred than another. These will only be true if they
  // have an actual preference.

  async function playerPrefersMen() {
    const scores = await genderPreferenceScores();
    return (scores.male > scores.female) && (scores.male > scores.futa)
  }
  async function playerPrefersMenOverWomen() {
    const scores = await genderPreferenceScores();
    return (scores.male > scores.female)
  }
  async function playerPrefersWomen() {
    const scores = await genderPreferenceScores();
    return (scores.female > scores.male) && (scores.female > scores.futa)
  }
  async function playerPrefersWomenOverMen() {
    const scores = await genderPreferenceScores();
    return (scores.female > scores.male)
  }

  // There won't be too many futa characters, so early events are usually
  // written with male or female paths. If the player has no preference for
  // either gender though, bisexual paths wind up here.
  async function playerPrefersNeitherMenNorWomen() {
    const women = await playerPrefersWomen();
    const men = await playerPrefersMen();
    return !women && !men;
  }

  // This is the same preferenceScores function that's in the Flag class, but
  // works of the context so that it's synchronous.
  async function genderPreferenceScores() {
    const scores = { male:0, female:0, futa:0 };
    const fucksMen = await Flag.lookup('player.fucksMen');
    const fucksWomen = await Flag.lookup('player.fucksWomen');
    const fucksFutas = await Flag.lookup('player.fucksFutas');

    if (fucksMen.value == 'always')   { scores.male += 2; }
    if (fucksMen.value == 'maybe')    { scores.male += 1; }
    if (fucksWomen.value == 'always') { scores.female += 2; }
    if (fucksWomen.value == 'maybe')  { scores.female += 1; }
    if (fucksFutas.value == 'always')  { scores.futa += 2; }
    if (fucksFutas.value == 'maybe')   { scores.futa += 1; }

    return scores;
  }

  return { check };

})();
