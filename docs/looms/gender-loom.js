global.GenderLoom = (function() {
  "use strict";

  // Replaces token placeholders in the form of:
  //   {{ actor::gender.his }}
  //
  // 'actor' is the subject. The subject must exist within the context. The
  //         subject should be a character, or an array of characters.
  //
  // 'gender.his' is the token.
  function findValue(subject, token, context) {
    if (context[subject]==null) { return Loom.error(`Subject(${subject}) not in context`); }

    // An array of characters will get the mass pronoun for the group, unless
    // the array has a single character. None of the other values for a group
    // would make much sense.
    if (context[subject] instanceof Array && context[subject].length > 1) {
      if (token == 'gender.his') { return 'their'; }
      if (token == 'gender.he')  { return 'they';  }
      if (token == 'gender.him') { return 'them';  }
      return Loom.error(`Bad group gender token(${token})`);
    }

    // If this is an array with a single element then get the gender from the
    // single array element;
    var gender = (context[subject] instanceof Array && context[subject].length == 1) ?
      context[subject][0].gender :
      context[subject].gender;

    if (gender == null) { return Loom.error(`Subject without gender`); }
    if (token == 'gender.man') { return gender.man; }
    if (token == 'gender.men') { return gender.men; }
    if (token == 'gender.male') { return gender.male; }
    if (token == 'gender.he') { return gender.he; }
    if (token == 'gender.him') { return gender.him; }
    if (token == 'gender.his') { return gender.his; }
    if (token == 'gender.hers') { return gender.hers; }
    if (token == 'gender.Man') { return gender.Man(); }
    if (token == 'gender.Men') { return gender.Men(); }
    if (token == 'gender.Male') { return gender.Male(); }
    if (token == 'gender.He') { return gender.He(); }
    if (token == 'gender.Him') { return gender.Him(); }
    if (token == 'gender.His') { return gender.His(); }
    if (token == 'gender.Hers') { return gender.Hers(); }

    return Loom.error(`Bad gender token(${token})`);
  }

  return { findValue:findValue };

})();
