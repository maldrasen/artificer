global.RaceLoom = (function() {
  "use strict";

  // Replaces token placeholders in the form of:
  //   {{actor::race.name}}
  //
  // 'actor' is the subject. The subject must exist within the context.
  // 'race.name' is the token.
  function findValue(subject, token, context) {
    if (context[subject]==null) { return Loom.error(`Subject(${subject}) not in context`); }

    var race = context[subject].race;
    if (race == null) { return Loom.error(`Subject without race`); }

    if (token == 'race.name') { return race.name; }

    return Loom.error(`Bad race token(${token})`);
  }

  return { findValue:findValue };

})();
