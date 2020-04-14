Weaver.SpeciesLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::species.gnome}}   Specific species name, like Elf, Gnome, or Lupin
  //   {{actor::species.aGnome}}  Singular species name, like an elf or a gnome.
  //   {{actor::species.gnomes}}  Plural species name, like Elves or Succubi
  //   {{actor::species.elf}}     Species class name like elves, or fae, or demons
  //   {{actor::species.elves}}   Plural species class name like elves, or fae, or demons
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let species = context.get(subject).character.species;
    if (token == "species.gnome")   { return species.name.toLowerCase(); }
    if (token == "species.aGnome")  { return EnglishUtility.a_an(species.name.toLowerCase()); }
    if (token == "species.gnomes")  { return species.pluralName.toLowerCase(); }
    if (token == "species.elf")   { return species.classname; }
    if (token == "species.elves") { return species.pluralClassname; }

    return Weaver.error(`Bad species token(${token})`);
  }

  return { findValue };

})();
