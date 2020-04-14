Weaver.GameLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{game|dayNumber}}
  //
  function findValue(token, context) {
    let game = context.get('game');

    if (token == "dayNumber") { return EnglishUtility.numberInEnglish(game.dayNumber); }
    if (token == "fullDate")  { return Calendar.fullDate(game.dayNumber); }

    return Weaver.error(`Bad game token(${token})`);
  }

  return { findValue };

})();
