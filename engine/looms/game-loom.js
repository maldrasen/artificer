Weaver.GameLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{game|dayNumber}}
  //
  function findValue(token, context) {
    if (token == "dayNumber") { return EnglishUtility.numberInEnglish(Game.dayNumber()); }
    if (token == "fullDate")  { return Calendar.fullDate(Game.dayNumber()); }

    return Weaver.error(`Bad game token(${token})`);
  }

  return { findValue };

})();
