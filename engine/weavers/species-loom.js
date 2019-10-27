Weaver.SpeciesLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::species.Elf}}    Species name, like Elf, Gnome, or Lupin
  //   {{actor::species.Elves}}  Plural species name, like Elves or Succubi
  //   {{actor::species.elf}}    Species class name like elf, or fae or demon
  //   {{actor::species.elves}}  Plural class name like elves, or fae, or demons
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let species = context.get(subject).character.species;
    if (token == "species.Elf")   { return species.name; }
    if (token == "species.Elves") { return species.pluralName; }
    if (token == "species.elf")   { return species.classname; }
    if (token == "species.elves") { return species.pluralClassname; }

    return Weaver.error(`Bad species token(${token})`);
  }

  return { findValue };

})();
