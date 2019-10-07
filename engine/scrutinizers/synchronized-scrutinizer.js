global.SynchronizedScrutinizer = (function() {

  // This might only be used by the Weaver, but it's possible that something
  // else in that chain may need to get it's requirements analyzed. This
  // scrutinizer requires a fully built context. The requires argument can be
  // either a string or an array of strings.
  function meetsRequirements(requires, context) {
    if (requires == null) { return true; }

    return ((typeof requires == "string") ? [requires] : requires).map(requirement => {
      return meetsRequirement(requirement, context);
    }).indexOf(false) < 0;
  }

  function meetsRequirement(requirement, context) {
    if (requirement == 'player.furry')                           { return context.P.character.species.isFurry; }
    if (requirement == 'player.not-furry')                       { return !context.P.character.species.isFurry; }
    if (requirement == 'player.cock-sheath')                     { return context.P.character.species.hasCockSheath; }
    if (requirement == 'player.no-cock-sheath')                  { return !context.P.character.species.hasCockSheath; }
    if (requirement == 'player.has-cock')                        { return context.P.cock != null; }
    if (requirement == 'player.no-cock')                         { return context.P.cock == null; }
    if (requirement == 'player.has-pussy')                       { return context.P.pussy != null; }
    if (requirement == 'player.no-pussy')                        { return context.P.pussy == null; }
    if (requirement == 'player.has-tits')                        { return context.P.tits != null; }
    if (requirement == 'player.no-tits')                         { return context.P.tits == null; }
    if (requirement == 'player.has-average-tits')                { return context.P.tits && context.P.tits.sizeClass == 'average'}
    if (requirement == 'player.has-smaller-than-average-tits')   { return context.P.tits && ['zero','tiny','small'].indexOf(context.P.tits.sizeClass) >= 0 }
    if (requirement == 'player.has-bigger-than-average-tits')    { return context.P.tits && ['big','huge','monster'].indexOf(context.P.tits.sizeClass) >= 0 }
    if (requirement == 'player.prefers-men')                     { return playerPrefersMen(context); }
    if (requirement == 'player.prefers-women')                   { return playerPrefersWomen(context); }
    if (requirement == 'player.prefers-men-over-women')          { return playerPrefersMenOverWomen(context); }
    if (requirement == 'player.prefers-women-over-men')          { return playerPrefersWomenOverMen(context); }
    if (requirement == 'player.prefers-neither-men-nor-women')   { return playerPrefersNeitherMenNorWomen(context); }

    if (requirement.match(/minions.working-project/)) { return checkWorkingMinionCount(requirement, context); }

    throw `Unknown Requirement - ${requirement}`;
  }

  // These functions need to look at the sexuality flags to determine if any
  // gender is more preferred than another. These will only be true if they
  // have an actual preference.

  function playerPrefersMen(context) {
    let scores = genderPreferenceScores(context);
    return (scores.male > scores.female) && (scores.male > scores.futa)
  }
  function playerPrefersMenOverWomen(context) {
    let scores = genderPreferenceScores(context);
    return (scores.male > scores.female)
  }
  function playerPrefersWomen(context) {
    let scores = genderPreferenceScores(context);
    return (scores.female > scores.male) && (scores.female > scores.futa)
  }
  function playerPrefersWomenOverMen(context) {
    let scores = genderPreferenceScores(context);
    return (scores.female > scores.male)
  }

  // There won't be too many futa characters, so early events are usually
  // written with male or female paths. If the player has no preference for
  // either gender though, bisexual paths wind up here.
  function playerPrefersNeitherMenNorWomen(context) {
    return !playerPrefersWomen(context) && !playerPrefersMen(context);
  }

  // This is the same preferenceScores function that's in the Flag class, but
  // works of the context so that it's synchronous.
  function genderPreferenceScores(context) {
    let scores = { male:0, female:0, futa:0 };
    if (context.flags['player.fucksMen'] == 'always')   { scores.male += 2; }
    if (context.flags['player.fucksMen'] == 'maybe')    { scores.male += 1; }
    if (context.flags['player.fucksWomen'] == 'always') { scores.female += 2; }
    if (context.flags['player.fucksWomen'] == 'maybe')  { scores.female += 1; }
    if (context.flags['player.fucksFutas'] == 'always')  { scores.futa += 2; }
    if (context.flags['player.fucksFutas'] == 'maybe')   { scores.futa += 1; }
    return scores;
  }

  // To check how many menions are working on a project. This requirement has
  // the format: "minions.working-project>1" and can use < or >
  function checkWorkingMinionCount(requirement, context) {
    if (requirement.indexOf('<') > 0) {
      return context.minionData.workingCount < parseInt(requirement.split('<')[1])
    }
    if (requirement.indexOf('>') > 0) {
      return context.minionData.workingCount > parseInt(requirement.split('<')[1])
    }
    throw `No operation in minion count requirement.`
  }

  return { meetsRequirements:meetsRequirements };

})();
