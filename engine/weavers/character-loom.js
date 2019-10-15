Weaver.CharacterLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::character.name}}
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let character = context.get(subject).character;

    if (token == "character.name")        { return `<span class='name'>${character.name}</span>`; }
    if (token == "character.firstName")   { return `<span class='name'>${character.firstName}</span>`; }
    if (token == "character.firstName's") { return `<span class='name'>${EnglishUtility.possessive(character.firstName)}</span>`; }
    if (token == "character.preName")     { return `<span class='name'>${character.preName}</span>`; }
    if (token == "character.lastName")    { return `<span class='name'>${character.lastName}</span>`; }
    if (token == "character.title")       { return `<span class='title'>${character.title}</span>`; }

    return Weaver.error(`Bad character token(${token})`);
  }

  return { findValue };

})();
