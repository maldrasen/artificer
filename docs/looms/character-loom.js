global.CharacterLoom = (function() {
  "use strict";

  // Replaces token placeholders in the form of:
  //   {{actor::character.name}}
  //
  // 'actor' is the subject. The subject must exist within the context.
  // 'character.name' is the token.
  function findValue(subject, token, context) {
    if (context[subject]==null) { return Loom.error(`Subject(${subject}) not in context`); }

    if (context[subject] instanceof Array && context[subject].length > 1) {
      return findGroupValue(context[subject], token);
    }

    var character = (context[subject] instanceof Array && context[subject].length == 1) ?
      context[subject][0] :
      context[subject];

    if (token == 'character.name') { return `<span class='name'>${character.fullName}</span>`; }
    if (token == 'character.given-name') { return `<span class='name'>${character.givenName}</span>`; }
    if (token == 'character.given-name-possessive') { return `<span class='name'>${character.getGivenName(true)}</span>`; }
    if (token == 'character.pre-name') { return `<span class='name'>${character.preName}</span>`; }
    if (token == 'character.post-name') { return `<span class='name'>${character.postName}</span>`; }

    return Loom.error(`Bad character token(${token})`);
  }

  function findGroupValue(array, token) {
    if (token == 'character.given-name') { return givenNames(array, false); }
    if (token == 'character.given-name-possessive') { return givenNames(array, true); }
    return Loom.error(`Bad character group token(${token})`);
  }

  function givenNames(list, possessive) {
    let key = possessive ? 'character.given-name-possessive' : 'character.given-name'

    if (list.length == 1) {
      return Loom.weave(`{{ actor::${key} }}`, { actor:list[0] });
    }

    if (list.length == 2) {
      return Loom.weave(`{{ a::${key} }} and {{ b::${key} }}`, { a:list[0], b:list[1] });
    }

    if (list.length > 2) {
      let names = '';
      for (let i=0; i<list.length-1; i++) {
        names += Loom.weave(`{{ actor::${key} }}, `, { actor:list[i] });
      };
      return names + Loom.weave(` and {{ actor::${key} }}`, { actor:list[list.length-1] });
    }
  }

  return { findValue:findValue };

})();
