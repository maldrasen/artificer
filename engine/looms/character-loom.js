Weaver.CharacterLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::character.name}}
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let character = context.get(subject).character;

    if (token == "character.name")        { return `${character.name}`; }
    if (token == "character.firstName")   { return `${character.singleName}`; }
    if (token == "character.firstName's") { return `${EnglishUtility.possessive(character.singleName)}`; }
    if (token == "character.preName")     { return `${character.preName}`; }
    if (token == "character.lastName")    { return `${character.lastName}`; }
    if (token == "character.title")       { return `${character.title}`; }
    if (token == "character.Title")       { return `${TextUtility.titlecase(character.title)}`; }
    if (token == "character.an_elf")      { return EnglishUtility.a_an(character.species.name.toLowerCase()); }

    return Weaver.error(`Bad character token(${token})`);
  }

  return { findValue };

})();
