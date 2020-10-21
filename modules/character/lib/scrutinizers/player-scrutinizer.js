CentralScrutinizer.registerScrutinizer(/^player/, async (requirement, context, state) => {
  const player = await lookupPlayer(context);

  if (requirement == 'player.always-fucks-men')              { return Flag.lookup('player.fucks-men') == 'always';   }
  if (requirement == 'player.sometimes-fucks-men')           { return Flag.lookup('player.fucks-men') == 'maybe';    }
  if (requirement == 'player.never-fucks-men')               { return Flag.lookup('player.fucks-men') == 'never';    }
  if (requirement == 'player.always-fucks-women')            { return Flag.lookup('player.fucks-women') == 'always'; }
  if (requirement == 'player.sometimes-fucks-women')         { return Flag.lookup('player.fucks-women') == 'maybe';  }
  if (requirement == 'player.never-fucks-women')             { return Flag.lookup('player.fucks-women') == 'never';  }
  if (requirement == 'player.always-fucks-futas')            { return Flag.lookup('player.fucks-futas') == 'always'; }
  if (requirement == 'player.sometimes-fucks-futas')         { return Flag.lookup('player.fucks-futas') == 'maybe';  }
  if (requirement == 'player.never-fucks-futas')             { return Flag.lookup('player.fucks-futas') == 'never';  }
  if (requirement == 'player.accepts-men')                   { return genderPreferenceScores().male > 0 }
  if (requirement == 'player.accepts-no-men')                { return genderPreferenceScores().male == 0 }
  if (requirement == 'player.accepts-women')                 { return genderPreferenceScores().female > 0 }
  if (requirement == 'player.accepts-no-women')              { return genderPreferenceScores().female == 0 }
  if (requirement == 'player.prefers-men')                   { return playerPrefersMen(); }
  if (requirement == 'player.prefers-women')                 { return playerPrefersWomen(); }
  if (requirement == 'player.prefers-men-over-women')        { return playerPrefersMenOverWomen(); }
  if (requirement == 'player.prefers-women-over-men')        { return playerPrefersWomenOverMen(); }
  if (requirement == 'player.prefers-neither-men-nor-women') { return playerPrefersNeitherMenNorWomen(); }

  return CharacterScrutinizer.check(requirement.match(/player\.(.+)/)[1], player);
});

async function lookupPlayer(context) {
  let player = context.player;
  if (player) { return player; }
  await context.addPlayer();
  return context.get('P');
}

// These functions need to look at the sexuality flags to determine if any
// gender is more preferred than another. These will only be true if they
// have an actual preference.

function playerPrefersMen() {
  const scores = genderPreferenceScores();
  return (scores.male > scores.female) && (scores.male > scores.futa);
}

function playerPrefersMenOverWomen() {
  const scores = genderPreferenceScores();
  return (scores.male > scores.female);
}

function playerPrefersWomen() {
  const scores = genderPreferenceScores();
  return (scores.female > scores.male) && (scores.female > scores.futa);
}

function playerPrefersWomenOverMen() {
  const scores = genderPreferenceScores();
  return (scores.female > scores.male);
}

// There won't be too many futa characters, so early events are usually
// written with male or female paths. If the player has no preference for
// either gender though, bisexual paths wind up here.
function playerPrefersNeitherMenNorWomen() {
  const women = playerPrefersWomen();
  const men = playerPrefersMen();
  return !women && !men;
}

// This is the same preferenceScores function that's in the Flag class, but
// works of the context so that it's synchronous.
function genderPreferenceScores() {
  const scores = { male:0, female:0, futa:0 };
  const fucksMen = Flag.lookup('player.fucks-men');
  const fucksWomen = Flag.lookup('player.fucks-women');
  const fucksFutas = Flag.lookup('player.fucks-futas');

  if (fucksMen == 'always')   { scores.male += 2;   }
  if (fucksMen == 'maybe')    { scores.male += 1;   }
  if (fucksWomen == 'always') { scores.female += 2; }
  if (fucksWomen == 'maybe')  { scores.female += 1; }
  if (fucksFutas == 'always') { scores.futa += 2;   }
  if (fucksFutas == 'maybe')  { scores.futa += 1;   }

  return scores;
}
